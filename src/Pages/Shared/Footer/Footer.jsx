import './Footer.css'

const Footer = () => {
    return (
        <div className=" md:px-12 px-8 py-8">
            <div>
                <footer className="footer p-10 bg-[#7C4FE0] text-base-content text-white">
                    <div>
                       <h2 className='text-2xl font-semibold'>Mamondots</h2>
                        <p>Mamondots Industries Ltd.<br />Providing reliable tech since 1992</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;