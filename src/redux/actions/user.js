/**
 * Created by Sinclair on 2017/4/11.
 */
import {USER_LOGOUT,USER_LOGIN} from '../commands/user';
import HttpFetch from '../../util/HttpFetch';
import {address} from '../../config/server'
const urls = {
    sign: '/sign',
    login: '/login',
    findById: '/findById',
    uploadAvatar: '/uploadAvatar',//未完成
    updateInfo: '/updateInfo'
};
/**
 * 登录action creater
 * @param state 状态 pending resolved rejected 进行中 完成 失败
 * @param isLogin 是否登录flag true false
 * @param info 用户信息
 * @returns {{type, data: {state: *, isLogin: false, info: {}}}}
 */
function userLoginActionCreater(state,isLogin:false,info={}) {
    //state = "pending resolved rejected"
    return {
        type:USER_LOGIN,
        data:{state, isLogin, info}
    }
}
/**
 * 登录方法
 * @param name
 * @param password
 * @returns {function(*)}
 */
function userLogin({name,password}) {
    return dispatch=>{
        dispatch(userLoginActionCreater("pending"));
        HttpFetch.post(address+urls.login,{name,password}).then(json=>{
                dispatch(userLoginActionCreater("resolved",json.state,json.data));
        }).catch(e=>{
            dispatch(userLoginActionCreater("rejected"));
        })
    }
}
export {userLogin};