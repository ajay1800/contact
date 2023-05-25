import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    // side bar component
    <>
      <div
        className='bg-white w-1/4 z-10 mt-4 rounded-lg ml-4 sm:hidden'
        style={{ height: "600px" }}>
        <div className=' text-lg space-y-20'>
          <div className='max-w-full h-20 flex justify-center items-center'>
            <p className='text-lg font-bold'>LOGO</p>
          </div>
          <div className='flex flex-col px-8 space-y-6 text-lg font-bold'>
            <Link to='/contact'>Contact</Link>
            <Link to='/chart-and-maps'>Charts and Maps</Link>
          </div>
        </div>
      </div>
      <div className='sm:block md:hidden p-5 absolute z-40'>
        <button onClick={open ? closeDrawer : openDrawer}>
          <div className='space-y-2'>
            <div className='w-8 h-0.5 bg-gray-600'></div>
            <div className='w-8 h-0.5 bg-gray-600'></div>
            <div className='w-8 h-0.5 bg-gray-600'></div>
          </div>
        </button>
        {open && (
          <div className='p-4 bg-white h-screen z-10 rounded-lg absolute w-60'>
            <div className='mb-6 flex items-center justify-between'>
              <h5 className='text-lg font-bold'>LOGO</h5>
              <button onClick={closeDrawer}>
                <p className='h-5 w-5'>X</p>
              </button>
            </div>
            <div className='flex flex-col px-8 space-y-6 text-lg font-bold'>
              <Link to='/contact'>Contact</Link>
              <Link to='/chart-and-maps'>Charts and Maps</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SideBar;
