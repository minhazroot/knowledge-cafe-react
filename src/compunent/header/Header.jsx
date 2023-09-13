import profile from '../../assets/images/profile.png'


const Header = () => {
    return (
        <header className='flex justify-between items-center mx-5 p-4 border-b-2'>
            <h1 className='text-4xl font-semibold'>Knowledge Cafe</h1>
            <img className='rounded-full' src={profile} alt="" />
        </header>
    );
};

export default Header;