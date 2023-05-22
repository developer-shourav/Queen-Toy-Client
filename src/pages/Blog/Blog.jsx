import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h2>This is Blog</h2>
        </div>
    );
};

export default Blog;