import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <div  class="rounded-md px-3.5 py-1.5 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600">
                <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">{children}</span>
            </div>
        </div>
    );
};

export default Button;