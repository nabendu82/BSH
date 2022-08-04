import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'

const PostList = () => {
    const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => setPosts(res.data))
    //         .catch(err => console.log(err))
    // },[])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data)
        }
        fetchPosts()
    }, [])

    return posts.map(post => <PostItem key={post.id} post={post} />)
}

export default PostList