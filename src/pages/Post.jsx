import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/conf";
import { Button, Container } from "../components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = async () => {
        const status = await service.deletePost(post.$id);
        if (status) {
            await service.deleteFile(post.featuredImage);
            navigate("/");
        }
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex flex-col md:flex-row justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={service.getFilePreview(post.featuredImage)}
                        alt={post.Title}
                        className="rounded-xl max-h-[400px] w-full object-cover"
                    />

                    {isAuthor && (
                        <div className="absolute right-4 top-4 flex flex-col sm:flex-row">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mb-2 sm:mb-0 sm:mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6 text-center">
                    <h1 className="text-2xl  font-bold">{post.Title}</h1>
                </div>
                <div className="browser-css text-center">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}