import React, {useEffect, useState} from 'react';

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
                {posts.map(post => (
                    <div>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;
