import React from 'react'
import service from '../appwrite/conf'
import { Link } from 'react-router-dom'

function PostCard({ $id, Title, featuredImage }) {

    return (
        <Link to={`/post/${$id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="w-full bg-gray-100 rounded-xl p-4 hover:shadow-lg transition">
                <div className="w-full justify-center mb-4">
                    <img
                        src={service.getFilePreview(featuredImage)}
                        alt={Title}
                        className="rounded-xl w-full h-48 object-cover"
                    />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-center sm:text-left">{Title}</h2>
            </div>
        </Link>
    )
}


export default PostCard