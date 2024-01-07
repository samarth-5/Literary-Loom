import React from 'react';
import logo from '../../assets/website/logo.png';
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const Menu = [
    {
        id:1,
        name:"Home",
        link:"#home",
    },
    {
        id:2,
        name:"Best Sellers",
        link:"#all-books",
    }
];

const DropDownLinks = [
    {
        name:"Trending Novels",
        link:"#best-books",
    },
    {
        name:"Best Selling",
        link:"#all-books",
    },
    {
        name:"Authors",
        link:"/#",
    },
]


const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200' id='homie'>
        <div className="container py-3 sm:py-0">
            <div className="flex justify-between items-center">
                <div>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={logo} alt="" className='w-10' />                        
                        Literary Loom
                    </a>
                </div>
                <div className='flex items-center justify-between gap-4'>

                    <div>
                        <DarkMode />
                    </div>

                    <ul className='items-center gap-4 hidden sm:flex'>
                        {
                            Menu.map((menu)=>(
                                <li>
                                    <a href={menu.link} className='inline-block py-4 px-4 hover:text-primary duration-200'>
                                        {menu.name}
                                    </a>
                                </li>
                            ))
                        }

                        <li className="group relative cursor-pointer">
                            <a href="/#" className='flex h-[72px] items-center gap[2px]'>
                                Quick Links &nbsp;
                                <span>
                                    <FaCaretDown className='transition duration-300 group-hover:rotate-180' />
                                </span>
                            </a>

                            {/* dropdown link section */}
                            <div className='absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px] dark:bg-gray-900 dark:text-white'>
                                <ul>
                                    {DropDownLinks.map((data)=>(
                                        <li key={data.id}>
                                            <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        
                    </ul>
                    &nbsp;
                    <button onClick={handleOrderPopup} className='bg-gradient-to-r from-primary to-scondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300'>
                        Order
                        <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;