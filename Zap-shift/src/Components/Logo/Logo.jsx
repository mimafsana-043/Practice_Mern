import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="Logo" />
            <h2 className="-ms-2.5 text-3xl font-bold">zapShift</h2>
        </div>
    );
};

export default Logo;        
        