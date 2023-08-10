import Headroom from 'react-headroom';
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll';


const Navbar = () => {
    return (
        <Headroom>


            <div className='absolute w-full top-0 z-10 lg:px-28 md:px-12 px-8 py-8 flex justify-between bg-[#7043D8] items-center'>
                <div className='lg:flex justify-between items-center text-white w-full'>
                    <div>
                        <Link to="home" smooth={true} duration={1000}>
                        <a className='text-2xl font-bold' href=''>Mamon<span className=''>dots</span></a>
                        </Link>
                    </div>
                    <div className='lg:flex items-center hidden '>
                        <div className='lg:flex ml-[-15px] lg:mt-0 mt-6 nav-li mr-8'>
                            <li><Link to="home" smooth={true} duration={1000}><a href="">Home</a></Link></li>
                            <li><Link to="features" smooth={true} duration={1000}><a href="">Features</a></Link></li>
                            <li><Link to="pricing" smooth={true} duration={1000}><a href="">Pricing</a></Link></li>
                            <li><Link to="portfolio" smooth={true} duration={1000}><a href="">Portfolio</a></Link></li>
                            <li><Link to="team" smooth={true} duration={1000}><a href="">Team</a></Link></li>
                            <li><Link to="contact" smooth={true} duration={1000}><a href="">Contact</a></Link></li>
                          
                        </div>
                        <div>
                            
                            <button className='text-lg mt-2 font-semibold px-6 py-2 border-2 border-white hover:bg-white hover:text-black duration-500'>Login</button>
                        </div>
                    </div>
                </div>
                <div className='lg:hidden bg-white p-2'>
                    <p className='text-black font-2xl'><GiHamburgerMenu></GiHamburgerMenu></p>
                </div>
            </div>

        </Headroom>

    );
};

export default Navbar;