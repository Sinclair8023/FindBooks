/**
 * Created by Sinclair on 2017/4/11.
 */
import {USER_LOGIN,USER_LOGOUT} from '../commands/user';
const defaultState = {
    state:"resolved",
    isLogin:false,
    info:{

    }
}
function userReducer(state=defaultState,action) {
    switch (action.type){
        case USER_LOGIN:
            return {...state,...action.data};
        case USER_LOGOUT:
            return defaultState;
        default:
            return state;
    }
}
export default userReducer;