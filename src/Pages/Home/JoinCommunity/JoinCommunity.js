import React from 'react';
import Button from '../../../components/Button/Button';

const JoinCommunity = () => {
    return (
        <div className='my-6 mx-24'>
            <div className='mb-10'>
                <h1 className='text-5xl font-medium mb-3'>Join Our book Group</h1>
                <p>Readers wanted! Browse clubs that are open to the public and find the perfect book club for you.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl" style={{background: 'rgba(251, 173, 175, 0.40)'}}>
                    <figure className="px-5 pt-5">
                        <img src="https://i.ibb.co/DtgqWd8/group-1.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Read the Classics</h2>
                        <p className='text-gray-600'>1339 members</p>
                        <p className='my-2'>A book club for the moment, and also for the ages. 📚 If you're looking for fellow bookworms to disc.</p>
                        <div className="card-actions">
                            <Button>Join as a book Lover</Button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl" style={{background: 'rgba(251, 173, 175, 0.40)'}}>
                    <figure className="px-5 pt-5">
                        <img src="https://i.ibb.co/N37KqJY/group-2.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Read Feather Romance Book</h2>
                        <p className='text-gray-600'>1339 members</p>
                        <p className='my-2'>A book club for the moment, and also for the ages. 📚 If you're looking for fellow bookworms to disc.</p>
                        <div className="card-actions">
                            <Button>Join as a book Lover</Button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl" style={{background: '#D2EDF2'}}>
                    <figure className="px-5 pt-5">
                        <img src="https://i.ibb.co/sgyh27X/group-3.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Poem with fiction lover</h2>
                        <p className='text-gray-600'>1339 members</p>
                        <p className='my-2'>A book club for the moment, and also for the ages. 📚 If you're looking for fellow bookworms to disc.</p>
                        <div className="card-actions">
                            <Button>Join as a book Lover</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinCommunity;