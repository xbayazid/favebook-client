import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../../styles.css'
import { Link } from 'react-router-dom';
import { HiArrowSmallRight } from "react-icons/hi2";


const BookCategory = () => {
    return (
        <div className='my-6 mx-[7%]'>
            <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <Tabs.List className="TabsList" aria-label="Manage your account">
                    <Tabs.Trigger className="TabsTrigger" value="tab1">
                        All-Type
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab2">
                        Science
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab3">
                        Fiction
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab4">
                        Philosoppy
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab5">
                        Biography
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab5">
                        Poetry
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab5">
                        Classic
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab5">
                        Romance
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab5">
                        Thriller
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content className="TabsContent" value="tab1">
                    <div className="container mx-auto p-10 md:p-20 grid lg:grid-cols-4 grid-cols-1 gap-3 transform duration-500">
                        <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/LvPcSbX/book-1.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Catriona Ward</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/sQqFxCd/book-2.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Abraham Verghese</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/7Gn5frp/book-3.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Natasaha</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/gVLTNmt/book-4.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Breanne Randall</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/LvPcSbX/book-1.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Catriona Ward</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/sQqFxCd/book-2.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Abraham Verghese</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/7Gn5frp/book-3.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Natasaha</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/gVLTNmt/book-4.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Breanne Randall</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/LvPcSbX/book-1.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Catriona Ward</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/sQqFxCd/book-2.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Abraham Verghese</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/7Gn5frp/book-3.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Natasaha</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/gVLTNmt/book-4.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Breanne Randall</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab2">
                    <div className='container mx-auto p-10 md:p-20 grid lg:grid-cols-4 grid-cols-1 gap-3 transform duration-500'>
                    <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/gVLTNmt/book-4.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Breanne Randall</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab3">
                      <div className='container mx-auto p-10 md:p-20 grid lg:grid-cols-4 grid-cols-1 gap-3 transform duration-500'>
                      <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/7Gn5frp/book-3.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Natasaha</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab4">
                      <div className='container mx-auto p-10 md:p-20 grid lg:grid-cols-4 grid-cols-1 gap-3 transform duration-500'>
                      <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/sQqFxCd/book-2.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Abraham Verghese</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab5">
                      <div className='container mx-auto p-10 md:p-20 grid lg:grid-cols-4 grid-cols-1 gap-3 transform duration-500'>
                      <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                            <div className="max-h-140 overflow-hidden">
                                <img className="w-full h-auto" src="https://i.ibb.co/LvPcSbX/book-1.png" alt="" />
                            </div>
                            <div className="p-7 my-auto pb-12 ">
                                <p>by <span className='text-gray-400'>Catriona Ward</span></p>
                                <div className="mt-[18px] font-medium">
                                    <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
};

export default BookCategory;