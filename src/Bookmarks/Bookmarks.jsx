
import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="w-1/3 bg-gray-200 ml-4">
            <h1 className="text-4xl text-center text-white bg-black rounded-2xl">Bookmarks{bookmarks.length}</h1>
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




}
export default Bookmarks;