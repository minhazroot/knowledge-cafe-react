import { useEffect, useState } from "react";
import MyBlog from "../myblog/MyBlog";
import PropTypes from 'prop-types';

const Blogs = ({ HandelBookmarks, HandelRedingTime }) => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch('/Blogs.json')
            .then(res => res.json())
            .then(data => setBlogData(data))
    }, []);

    return (
        <div className="md:w-2/3">


            {blogData.map(blg => <MyBlog
                HandelRedingTime={HandelRedingTime}
                HandelBookmarks={HandelBookmarks}

                key={blg.id} blg={blg}>

            </MyBlog>)}
        </div>
    );
};
Blogs.propTypes = {

    HandelBookmarks: PropTypes.function,
    HandelRedingTime: PropTypes.function



}

export default Blogs;
