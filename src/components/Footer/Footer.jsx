import React from "react";
import {SiJsonwebtokens, SiExpress, SiMongodb, SiNextdotjs} from 'react-icons/si';
import {BsFillDatabaseFill, BsFillTelephoneFill} from 'react-icons/bs';
import {MdMail} from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-[#202226]  py-16 mt-60 text-white">
      <div className="container mx-auto px-5">
        <div className="lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-5 text-[#4acdd5]">About Us</h2>
            <p className="text-stone-300 text-sm mb-4">We are the best desny toy seller. You can get all kinds of desny toys here. Our main goal is to provide the best quality products and get customer satisfaction. We want to spread joy through the toy at your home. Help us by staying attached to us.</p>
            <p className="font-bold mb-2 flex items-center gap-3">< BsFillTelephoneFill className="inline text-[#ff6799] text-xl" /> +125 00124 35</p>

            <p className="font-bold mb-8 flex items-center gap-3">< MdMail className="inline text-2xl text-[#ff6799]" /> queen.toy@gmail.com</p>

            <input className=" py-3 px-4 bg-white bg-opacity-20 rounded-full rounded-e-none" placeholder="Enter Your Email" type="email "  /> <input className="btn ms-0 normal-case rounded-full rounded-l-none bg-[#ff6799] border-[#ff6799]" type="submit" value="Send" />
            
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-5 text-[#4acdd5]">Latest Blog</h2>
            <p className="text-stone-300 text-sm mb-3"> <SiJsonwebtokens className="inline text-xl text-white me-2" />What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>

            <p className="text-stone-300 text-sm mb-3"> <BsFillDatabaseFill className="inline text-xl text-white me-2" />Compare SQL and NoSQL databases?</p>

            <p className="text-stone-300 text-sm mb-3"> <SiExpress className="inline text-xl text-white me-2" />What is express js?</p>

            <p className="text-stone-300 text-sm mb-4"> <SiNextdotjs className="inline text-xl text-white me-2" />What is Nest js?</p>

            <p className="text-stone-300 text-sm mb-3"> <SiMongodb className="inline text-2xl text-white me-2" />What is MongoDB aggregate and how does it work?</p>
          </div>

          <div className="md:mx-20 w-8/12">
            <h2 className="text-2xl font-bold mb-5 text-[#4acdd5]">Instagram</h2>
            <div className="grid grid-cols-2 gap-1">
              <div>
                <img
                  src="https://www.laughingplace.com/w/wp-content/uploads/2022/07/rapunzel-disney-designer-collection-ultimate-princess-celebration.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.laughingplace.com/w/wp-content/uploads/2022/07/rapunzel-disney-designer-collection-ultimate-princess-celebration.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.laughingplace.com/w/wp-content/uploads/2022/07/rapunzel-disney-designer-collection-ultimate-princess-celebration.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.laughingplace.com/w/wp-content/uploads/2022/07/rapunzel-disney-designer-collection-ultimate-princess-celebration.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
