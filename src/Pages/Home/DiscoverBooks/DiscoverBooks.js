import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';

const DiscoverBooks = () => {
    const cards = [
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

        }
    ]
    return (
        <div className='my-6 mx-5 lg:mx-24'>
            <h1 className='text-xl lg:text-5xl font-medium mb-2'>Discover your favourite book</h1>
            <p>Combines a sense of adventure and imagination, enticing potential readers to explore the content on the website</p>
            <div className='mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    cards.map((card,i) => <div key={i}>
                        <Link>
                    <div className="card  py-8" style={{ background: "#D0ECF1" }}>
                        <div className="card-body items-center text-center">
                            <h2 className="font-medium">Fiction</h2>
                        </div>
                    </div>
                    </Link>
                    </div>
                    )
                }
            </div>
            <div className='flex justify-center mt-6'>
                <Link to='/book'><Button>View More</Button></Link>
            </div>
        </div>
    );
};

export default DiscoverBooks;