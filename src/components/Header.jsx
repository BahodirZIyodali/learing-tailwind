import React from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Header = () => {
    const [toggle,setToggle]=React.useState(false)
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="flex justify-between items-center  py-[15px] max-w-[1240px]  mx-auto ">
        <div className="text-3xl font-bold">WsCube Tech</div>
        {!toggle?
        <AiOutlineMenu onClick={()=>setToggle(!toggle )} className="text-2xl text-white md:hidden block"/>
         :
      <AiOutlineClose onClick={()=>setToggle(!toggle )}  className="text-2xl text-white md:hidden block"/>
}
        <ul className=" hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* responsive navbar */}
        <ul className={` fixed bg-black duration-300  top-[92px] w-[75%] h-screen  md:hidden text-white gap-10 ${toggle?`left-[0]`:`left-[-100%]`}`}>
          <li className="p-3">Home</li>
          <li className="p-3">Company</li>
          <li className="p-3">Resources</li>
          <li className="p-3">About</li>
          <li className="p-3">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
