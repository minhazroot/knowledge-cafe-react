import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const MyBlog = ({ blg, HandelBookmarks }) => {
    const { title, author_name, cover_image, author_image, posted_date, reading_time, hashtags } = blg;


    return (
        <div>
            <img className='w-full h-[450px] rounded-2xl' src={cover_image} alt={`cover img ${title}`} />
            <h1 className='text-5xl mt-5 mb-5'>{title}</h1>
            <div className='flex justify-between items-center'>
                <div className='flex items-center mb-10'>
                    <div>
                        <img className='h-20 w-20 rounded-full' src={author_image} alt="" />
                    </div>
                    <div className='ml-6'>
                        <h1 className='text-3xl'>{author_name}</h1>
                        <p>{posted_date}</p>
                        {
                            hashtags.map((has, index) => <span className='text-blue-500' key={index}><a href=""> # {has}</a></span>)
                        }


                    </div>
                </div>
                <div className='flex items-center' >
                    <span>{reading_time}  min read</span>
                    <button onClick={() => HandelBookmarks(blg)} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
                <button className='text-blue-700 underline'>Mark as read</button>
            </div>

        </div>
    );
};

MyBlog.propTypes = {
    blg: PropTypes.object.isRequired,
    HandelBookmarks: PropTypes.function




}

export default MyBlog;