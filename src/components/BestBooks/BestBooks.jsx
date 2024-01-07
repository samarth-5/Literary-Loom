import React from 'react';
import Book1 from "../../assets/books/book2.jpg";
import Book2 from "../../assets/books/book1.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
    {
        id: 1,
        img: Book1,
        title: "His Life",
        description:
          "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 2,
        img: Book2,
        title: "Who's there",
        description:
          "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 3,
        img: Book3,
        title: "Lost Boy",
        description:
          "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
];

const BestBooks = ({handleOrderPopup}) => {
  return (
    <>
      <div className="py-10" id='best-books'>
        <div className="container">
            <div className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Best Books
                </p>
                <h1 className="text-3xl font-bold">Trending Novels</h1>
                <p className="text-xs text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Quae temporibus iste ullam commodi. 
                    cum reprehenderit! Natus dolorem exercitationem eum illo asperiores!
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                {
                    BooksData.map((book)=>(
                        <div data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
                            <div className='h-[100px]'>
                                <img src={book.img} 
                                     alt=""
                                     className="max-w-[100px] block mx-auto transform -translate-y-14
                                     group-hover:scale-105  duration-300 shadow-md" />
                            </div>
                            <div className='p-4 text-center'>
                                <div className='w-full flex items-center justify-center'>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div> 
                                <h1 className='text-xl font-bold '>{book.title}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{book.description}</p>
                                <button onClick={handleOrderPopup} className='bg-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary'>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default BestBooks;