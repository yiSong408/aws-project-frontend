import React from 'react';
import sorry from '../static/sorry.png'
function ErrorPage(props) {
    return (
        <div>
            <div className={'text-3xl font-bold underline text-red-700 text-center'}>404 not found</div>
            <div className={'text-center text-red-950'}>Please wait a few time and refresh later</div>
            <img className={'w-fit h-full m-auto'} alt={''} src={sorry}/>
        </div>
    );
}

export default ErrorPage;
