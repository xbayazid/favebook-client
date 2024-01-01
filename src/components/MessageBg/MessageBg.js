import React from 'react';
import messageBg from '../../assests/message-bg.png'

const MessageBg = () => {
    return (
        <div>
            <label htmlFor="message-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <div className='h-screen'>
            <img src={messageBg} alt="" className='h-full w-full'/>
        </div>
        </div>
        
    );
};

export default MessageBg;