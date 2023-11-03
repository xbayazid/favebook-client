import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';

const FamousAuthors = () => {
    const authors=[
        {
            id: 1,
        },
        {
            id: 1,
        },
        {
            id: 1,
        },
        {
            id: 1,
        },
    ]
    return (
        <div className='my-9 mx-[7%]'>
            <div className='mb-2 lg:flex justify-between items-center'>
                <div>
                    <h1 className='text-xl lg:text-5xl font-medium mb-2'>Most Famous Authors</h1>
                    <p>Unveiling the World's Most Famous Authors</p>
                </div>
                <div className='flex items-center gap-3 mt-3 lg:mt-0'>
                    <Link><Button>Popular</Button></Link>
                </div>
            </div>
            <hr />
            <div className="mt-16 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                authors.map((author, i) => <div className='h-[408px] group' style={{backgroundImage: "url(https://i.ibb.co/kqPCXNQ/author-1.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className='h-full w-full bg-[rgba(51,51,51,0.6)] hidden group-hover:block duration-1000'>
                    <div className='text-center h-full w-full flex flex-col text-white items-center justify-center'>
                    <h1 className='text-2xl font-bold'>“Juven merry”</h1>
                    <p>Author</p>
                    </div>
                </div>
            </div>)
            }
            </div>
        </div>
    );
};

export default FamousAuthors;