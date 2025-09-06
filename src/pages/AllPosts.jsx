import React, { useEffect, useState } from 'react'
import service from '../appwrite/conf'
import { PostCard, Container } from '../components/index'

const AllPosts = () => {
    const [posts, setPosts] = useState([])
    console.log(posts)

    useEffect(() => {
        service.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap -m-2">
                    {posts?.map((post) => (
                        <div
                            key={post.$id}
                            className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                        >
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
