import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  console.log('openMenu: ', openMenu);

  const handleClick = () => {
    setOpenMenu(prevOpenMenu => !prevOpenMenu);
  }

  return (
    <div>
      <div className='flex flex-wrap align-items-center justify-between'>
        <div className='flex  align-items-center'>
          <div className='sm:text-6xl text-4xl font-bold flex gap-0 align-items-center'>
            <IoIosArrowBack />
            <IoIosArrowForward />
          </div>

          <div>
            <div className='sm:text-2xl text-xl font-bold'>Akshara Mishra</div>
            <p className='sm:font-bold'>Frontend Developer</p>
          </div>

        </div>

        <div className='hidden sm:flex text-xl mt-1 flex gap-4 align-items-center'>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>

        <div className='mt-1 sm:hidden text-3xl'>
          {!openMenu ?
            <button onClick={() => setOpenMenu(true)}>
              <TbMenu2 />
            </button>
            :
            <div>
              <div className='mt-1 sm:hidden text-3xl'>
                <button onClick={() => setOpenMenu(false)}>
                  <IoMdClose />
                </button>
              </div>

            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Header