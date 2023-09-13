import PropTypes from 'prop-types';

const MyBlog = ({ blg }) => {
    const { title, author_name } = blg;


    return (
        <div>
            <h1>This is {title}</h1>
            <h1>{author_name}</h1>

        </div>
    );
};

MyBlog.propTypes = {
    blg: PropTypes.object.isRequired,
}

export default MyBlog;