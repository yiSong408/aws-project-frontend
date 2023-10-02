import React, {useEffect, useState} from 'react';
import {loginService} from "../apis";
import {useNavigate} from "react-router-dom";

function Login(props) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [status,setStatus] = useState('');
    const navigate = useNavigate();
    const [timeTable,setTimeTable] = useState('')

    const doLogin=()=>{
        console.log('do login',username,password)
        loginService({username, password}).then(res=>{
            console.log(res)
            if(res.data.code != 200){
                setStatus(res.data.msg)
            }else {
                setStatus('')
                localStorage.setItem('teriyaki',res.data.data)
                navigate('/home')
            }
        })
    }
    useEffect(()=>{
        const hours = new Date().getHours();
        if(hours<=12){
            setTimeTable('morning')
        }else if(hours>12 && hours<=18){
            setTimeTable('afternoon')
        }else {
            setTimeTable('evening')
        }
    }, [])

    return (
        <div className={'text-gray-600 body-font'} >
            <div className={'container px-5 py-24 mx-auto flex flex-wrap items-center'}>
                {/** left side block area*/}
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">Good {timeTable}, welcome to my personal space, feel free to explore XD</h1>
                    <p className="leading-relaxed mt-4">Sow nothing, reap nothing.</p>
                </div>
                {/** right side input area*/}
                <div className={'lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'}>
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                    <div className="relative mb-4">
                        <label htmlFor='username' className="leading-7 text-sm text-gray-600">Username</label>
                        <input type="text" id="username" name="username" value={username} onChange={e=>{setUsername(e.target.value)}}
                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={e=>{setPassword(e.target.value)}}
                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className={'text-red-700'}>{status}</div>
                    <button
                        className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        onClick={doLogin}>Let's Go!
                    </button>
                    <p className="text-xs text-gray-500 mt-3">If no account, please <a className={'text-blue-400'} href={'/register'}>sign up </a>first.<a href={'#'} className={'text-blue-400 float-right'}>Forget password</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;