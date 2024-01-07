import React from 'react';
import Book1 from '../../assets/books/book1.jpg';
import Book2 from '../../assets/books/book2.jpg';
import Book3 from '../../assets/books/book3.jpg';
import Book4 from '../../assets/books/book4.jpg';
import Book5 from '../../assets/books/book5.jpg';
import { data } from 'autoprefixer';
import { FaStar } from "react-icons/fa";

const booksData=[
  {
    id:1,
    img:Book1,
    title:"Who's there",
    rating:4.9,
    author:"Donald Frank",
  },
  {
    id:2,
    img:Book2,
    title:"His Life",
    rating:4.5,
    author:"John Walker",
  },
  {
    id:3,
    img:Book3,
    title:"Lost Boys",
    rating:4.6,
    author:"Adam Smith",
  },
  {
    id:4,
    img:Book4,
    title:"His Life",
    rating:4.7,
    author:"Samuel Williamson",
  },
  {
    id:5,
    img:Book5,
    title:"Pirates of Carrebean",
    rating:4.1,
    author:"Donald Frank",
  }
];

const AllBooks = () => {
  return (
    <>
      <div className='py-10' id='all-books'>
        <div className="container placeholder-gray-100">
           <div data-aos="slide-up" className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Top Books
                </p>
                <h1 className="text-3xl font-bold">Best Sellers</h1>
                <p className="text-xs text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Quae temporibus iste ullam commodi. 
                    cum reprehenderit! Natus dolorem exercitationem eum illo asperiores!
                </p>
          </div>

          <div data-aos="slide-up">
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
              {
                booksData.map((data)=>(
                  <div className='space-y-3'>
                    <img src={data.img} 
                         alt=""
                         className='h-[200px] w-[150px] object-cover rounded-md' />
                    <div>
                      <h2 className='font-semibold'>{data.title}</h2>

                      <p className="text-sm text-gray-700 dark:text-gray-400">{data.author}</p>
                      
                      <div className="flex items-center gap-1">
                        <FaStar className='text-yellow-500' />
                        <span>{data.rating}</span>
                      </div>          

                    </div>
                  </div>
                ))
              }
            </div>
            
            <div className='flex justify-center'>
              <button className='text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full'>
                View All Novels
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AllBooks;