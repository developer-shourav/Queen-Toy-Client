import React, { useEffect, useState } from 'react';
import SingleQuestion from './SingleQuestion';

const Blog = () => {

    const [questions, setQuestions] = useState([]);


    useEffect( ( ) => {
        fetch('https://queen-toy-server-developer-shourav.vercel.app/blogs')
        .then( res => res.json())
        .then( data => setQuestions(data))
    },[ ])

    return (
        <div className='grid grid-cols-1 gap-4 pb-40'>
            
            {
                questions?.map( questionItem => <SingleQuestion questionData = {questionItem} key ={questionItem._id}> </SingleQuestion>)
            }
        </div>
    );
};

export default Blog;