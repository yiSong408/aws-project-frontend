import {request} from "../utils";

export const loginService=(data)=>request({
    url:'/user/login',
    method:'post',
    data:data
})

export const register=(data)=>request({
    url:'/user/register',
    method:'post',
    data:data
})