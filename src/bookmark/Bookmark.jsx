
import PropTypes from 'prop-types';
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='p-5 drop-shadow-2xl m-3 bg-gray-400 rounded-xl '>


            <h1 className='text-2xl '>{title}</h1>
        </div>
    );
};
Bookmark.propTypes = {

    bookmark: PropTypes.object,




}

export default Bookmark;