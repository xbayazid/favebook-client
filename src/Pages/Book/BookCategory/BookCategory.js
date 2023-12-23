import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../../styles.css'
import { Link } from 'react-router-dom';
import { HiArrowSmallRight } from "react-icons/hi2";
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Loader/Loader';
import BookCard from './BookCard';


const BookCategory = () => {
    const [categoryName, setCategoryName] = useState(null);

    const { data: books = [], isLoading, refetch } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/books/`);
            const data = await res.json();
            return data;
        }
    });

    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories/');
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
                            books.map(book => <BookCard key={book._id} book={book} />)
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
    );
};

export default BookCategory;