import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1><u>FAQ</u></h1>
            <div className='blog'>
                <div>
                    <h3>How does React js works?</h3>
                    <p><b>Ans:</b> React is a tool for building UI components. How does React Work? React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
                </div>
                <div>
                    <h3>Difference between Props & State.</h3>
                    <p><b>Ans:</b> The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
                </div>
                <div>
                    <h3>What are the usages of useEffect?</h3>
                    <p><b>Ans:</b> The useEffect() is for side-effects. A functional React component uses props and/or state to calculate the output.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;