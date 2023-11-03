import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';

const MyPassion = () => {
    return (
        <div className='my-6 mx-5 lg:mx-24 grid gap-3 grid-cols-1 lg:grid-cols-2 items-center'>
            <div>
            <h1 className='uppercase text-xl lg:text-5xl font-medium'>“reading is my passion”</h1>
            <div className='w-[450px]'>
            <p className='lg:w-[649px] my-2 lg:my-3 text-justify'>Book lovers can be avid readers, scholars, writers, or simply individuals who find comfort and enlightenment in the magic that books offer. They appreciate the power of storytelling, the beauty of language, and the vast array of emotions and experiences that books can provide.</p>
            <Link to='' className='flex justify-start mb-5 lg:mb-0'><Button>Join as a book lover</Button></Link>
            </div>
            </div>
            <div className='lg:w-[90%] lg:ml-9'>
                <img src="https://i.ibb.co/2YYJS0X/passions.png" alt="" />
            </div>
        </div>
    );
};

export default MyPassion;