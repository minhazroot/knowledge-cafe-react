import { useEffect, useState } from "react";
import MyBlog from "../myblog/MyBlog";

const Blogs = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch('/Blogs.json')
            .then(res => res.json())
            .then(data => setBlogData(data))
    }, []);

    return (
        <div className="md:w-2/3">


            {blogData.map(blg => <MyBlog key={blg.id} blg={blg}>

            </MyBlog>)}
        </div>
    );
};

export default Blogs;
