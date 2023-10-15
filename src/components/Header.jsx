
import bg from '../assets/images/more/15.jpg';
import logo from '../assets/images/more/logo1.png'

const Header = () => {
    const navStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center' 
    };

    return (
        <div style={navStyle} className='flex gap-2 items-center justify-center'>
            <img src={logo} alt="logo" className='h-[80px] w-[70px]' />
            <h2 className="font-rancho md:text-6xl text-4xl text-white">Espresso Emporium</h2>
        </div>
    );
};

export default Header;
