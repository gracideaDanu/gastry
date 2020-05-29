const request = require('supertest')
const app = require('../../src/app')
const Supplier = require('../../src/models/supplier.model')
const { setupDatabase } = require('../fixtures/db')
const {
    register_supplier,
    register_supplier_with_invalid_email,
    register_supplier_with_invalid_password,
    register_supplier_with_invalid_cpassword,
    register_supplier_without_required_property,
    login_supplier,
    login_nonexistent_supplier,
    login_supplier_with_wrong_password
} = require('../fixtures/supplier')

beforeAll(setupDatabase)

describe('Registration', () => {
    it('Should register a new supplier with valid info', async () => {
        const response = await request(app)
            .post('/supplier/register')
            .send(register_supplier)
            .expect(200)
        
        const supplier = await Supplier.findById(response.body._id)
        expect(supplier).not.toBeNull()
        expect(supplier.email).toEqual(register_supplier.email)
    })

    it('Should not register a supplier with an email that already exists', async () => {
        const response = await request(app)
            .post('/supplier/register')
            .send(register_supplier)
            .expect(400)
        expect(response.body.email).toBeDefined()
    })

    it('Should not register a supplier with an invalid email', async () => {
        const response = await request(app)
            .post('/supplier/register')
            .send(register_supplier_with_invalid_email)
            .expect(400)
        expect(response.body.email).toBeDefined()
    })

    it('Should not register a supplier with an invalid password', async () => {
        const response = await request(app)
            .post('/supplier/register')
            .send(register_supplier_with_invalid_password)
            .expect(400)
        expect(response.body.password).toBeDefined()
    })

    it('Should not register a supplier with an invalid confirm password', async () => {
        const response = await request(app)
            .post('/supplier/register')
            .send(register_supplier_with_invalid_cpassword)
            .expect(400)
        expect(response.body.password2).toBeDefined()
    })

    it('Should not register a supplier without a required property', async () => {
        const response = await request(app)
            .post('/supplier/register')
            .send(register_supplier_without_required_property)
            .expect(400)
        expect(response.body.lastName).toBeDefined()
    })
})

describe('Logging in', () =>{
    it('Should login an existing supplier', async () => {
        const response = await request(app)
            .post('/user/login')
            .send(login_supplier)
            .expect(200)
        expect(response.body.success).toBeTruthy()
    })

    it('Should not login non-existent supplier', async () => {
        await request(app)
            .post('/user/login')
            .send(login_nonexistent_supplier)
            .expect(404)
    })

    it('Should not login an existing supplier with a wrong password', async () => {
        await request(app)
            .post('/user/login')
            .send(login_supplier_with_wrong_password)
            .expect(401)
    })
})

describe('Fetching', () => {
    it('Should fetch all suppliers', async () => {
        const login_response = await request(app)
            .post('/user/login')
            .send(login_supplier)

        const response = await request(app)
            .get('/supplier')
            .set("Authorization", login_response.body.token)
            .send()
            .expect(200)
        expect(response.body.data.length).toBeGreaterThan(0)
    })

    it('Should not fetch suppliers without a token', async () => {
        await request(app)
            .get('/supplier')
            .send()
            .expect(404)
    })
});