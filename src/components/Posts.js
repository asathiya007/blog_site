import React, {useEffect, useState} from 'react';
import Post from './Post';

function Posts() {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []); 

    const [posts, setPosts] = useState([]);

    return (
        <div className="d-flex justify-content-center">
            <div className="w-75">
                {posts.map((post, i) => (
                    <Post title={post.title} body={post.body} key={i}/>
                ))}
            </div>
        </div>
    );
}

export default Posts;
