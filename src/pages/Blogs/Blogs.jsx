import React from 'react';
import useTitle from '../../Hooks/useTitle';
import questionImg from '../../assets/images/Blog-img/question.png';
import Blog from './Blog';
import { ScrollRestoration } from 'react-router-dom';

const Blogs = () => {
    useTitle('Blog')
    return (
      <div  className=" sm:pt-20 md:pt-36 container mx-auto">
        <h2 className="font-bold text-3xl mb-10">Common Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="hidden md:block">
            <img src={questionImg} alt="" />
          </div>

          <div className="">
            <Blog> </Blog>
          </div>
        </div>
        <ScrollRestoration />
      </div>
    );
  };
  
  export default Blogs;
  