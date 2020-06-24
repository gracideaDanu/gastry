import authReducer from "./authReducer";
import * as actionTypes from '../../actions/actionTypes';

describe('auth Reducer', function () {
    it('should return initial state', function () {
        expect(authReducer(undefined,{})).toEqual({
            token: null,
            loading: false,
            error: null
        })
    });

    it('should store the token upon login', function () {
        expect(authReducer({
            token: null,
            loading: false,
            error: null
        },{
            type:actionTypes.LOGIN_SUCCESS,
            logindata: {token: 'some-token'}
        })).toEqual({
            token: 'some-token',
            loading: false,
            error: null
        })
    });
});