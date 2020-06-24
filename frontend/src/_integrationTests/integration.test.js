import moxios from 'moxios';

import {login} from "../redux/actions/authorization/login";
import {testStore} from "../../Utils";


describe('login action', () => {

    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    test('should call api', async () => {
        const expectedState = [{
            token: "Bearer token",
            loading: false
        }];

        const store = testStore();

        moxios.wait( () => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });


        await store.dispatch(login())
        const newState = store.getState();
        console.log(newState)


    });
});