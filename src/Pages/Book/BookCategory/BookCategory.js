import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../../styles.css'
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Loader/Loader';
import BookCard from './BookCard';
import { FaSearch } from 'react-icons/fa';


const BookCategory = () => {
    const [categoryName, setCategoryName] = useState(null);
    const [search, setSearch] = useState('');

    const { data: books = [], isLoading, refetch } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch(`https://favebook-server-chi.vercel.app/books/`);
            const data = await res.json();
            return data;
        }
    });

    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://favebook-server-chi.vercel.app/categories/');
            const data = await res.json();
            return data;
        }
    });
    console.log(categoryName)
    console.log(books)

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <div className='mx-[7%]'>
            <div className='bg-[#D0ECF1] rounded-lg'>
                <div className=' lg:w-[757px] mx-auto py-24'>
                    <h1 className='text-2xl lg:text-5xl font-semibold text-center'>Find your Books & Discover Your Literary Explorer</h1>
                    <div className='mt-12 text-center'>
                    <input onChange={(e) => setSearch(e.target.value)} className='py-4 w-96 rounded-lg input input-bordered relative' placeholder='Book Name' type="search" name="" id="" /> <span className='absolute bg-[#03CCD9] px-3 py-2 rounded-lg -ml-3'><FaSearch className='text-3xl'/></span>
                    </div>
                </div>
            </div>
        </div>
            <div className='my-6 mx-[7%]'>
            <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <Tabs.List className="TabsList" aria-label="Manage your account">
                    <Tabs.Trigger className="TabsTrigger" value="tab1" onClick={() => {
                        setCategoryName(null)
                        refetch();
                    }}>
                        All-Type
                    </Tabs.Trigger>

                    {

                        categories.map(category =>
                            <Tabs.Trigger onClick={() => {
                                setCategoryName(category.category)
                                refetch();
                            }} key={category._id} className="TabsTrigger" value={category.category}>
                                {category.category}
                            </Tabs.Trigger>
                        )
                    }
                </Tabs.List>
                <Tabs.Content className="TabsContent" value="tab1">
                    <div className="container mx-auto p-10 md:p-20 grid lg:grid-cols-4 grid-cols-1 gap-3 transform duration-500">

                        {
                            books.filter(book => {
                                return search.toLowerCase() === '' ? book : book.name.toLowerCase().includes(search)
                            }).map(book => <BookCard key={book._id} book={book} />)
                        }

                    </div>
                </Tabs.Content>
                {
                    categories.map(category => (
                        <Tabs.Content className="TabsContent" value={category.category}>
                            <div className="container mx-auto p-10 md:p-20 grid lg:grid-cols-4 grid-cols-1 gap-3 transform duration-500">

                                {
                                    books.map(book => book.category === category.category && <BookCard key={book._id} book={book} />)
                                }

                            </div>
                        </Tabs.Content>
                    ))
                }
                
            </Tabs.Root>
        </div>
        </div>
    );
};

export default BookCategory;