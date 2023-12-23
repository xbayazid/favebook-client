import React from 'react';
import messageBg from '../../assests/message-bg.png'

const MessageBg = () => {
    return (
        <div className='h-screen'>
            <img src={messageBg} alt="" className='h-full w-full'/>
        </div>
    );
};

export default MessageBg;