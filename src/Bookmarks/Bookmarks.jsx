
import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({ bookmarks, redingTime }) => {
    return (
        <div className="w-1/3 bg-gray-200 ml-4">

            <h1 className="text-4xl text-center text-white bg-black rounded-2xl">Bookmarks{bookmarks.length}</h1>
            <h3 className='text-3xl bg-blue-500 text-white text-center rounded-xl mt-3'>Reding Time :{redingTime}</h3>
            {
                bookmarks.map(bookmark => <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {

    bookmarks: PropTypes.array,
    redingTime: PropTypes.number,




}
export default Bookmarks;