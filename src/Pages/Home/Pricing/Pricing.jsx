import Heading from "../../Components/Heading/Heading";
import basic from '../../../assets/img/basic.png'
import prumire from '../../../assets/img/premium.png'
import './Pricing.css'

const Pricing = () => {
    return (
        <div id='pricing' className="lg:px-28 md:px-12 px-8 py-8 text-center">
            <div>
                <Heading

                    headingTitle='Unlock Full Power Of Mamondots'
                    headDeatils='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati  dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.'
                >

                </Heading>
                <div className="grid lg:grid-cols-2 lg:gap-20 py-8 mt-16 lg:px-44">
                    <div className="flex justify-end items-center flex-col">
                        <div className="flex justify-center items-center flex-col bg-white pricing-box py-12">
                            <img className="w-[35%]" src={basic} alt="" />
                            <h2 className="tracking-widest text-2xl font-semibold py-2 mt-2 text-[#4E4E4E]">BASIC</h2>
                            <h2 className="text-5xl font-bold text-[#642CE1] ">49$</h2>
                            <div className="text-center price-list py-2 mt-4 text-lg">
                                <li>5GB Linux Web Space</li>
                                <li>5 MySQL Databases</li>
                                <li>24/7 Tech Support</li>
                                <li>Daily Backups</li>
                            </div>
                        </div>
                        <button className='px-8 py-3 text-lg font-medium text-white features-btn mt-[-25px]'>Sing Up</button>
                    </div>
                    <div className="flex justify-end items-center flex-col">
                        <div className="flex justify-center items-center flex-col bg-white pricing-box py-12">
                            <img className="w-[35%]" src={prumire} alt="" />
                            <h2 className="tracking-widest text-2xl font-semibold py-2 mt-2 text-[#4E4E4E]">PRO</h2>
                            <h2 className="text-5xl font-bold text-[#642CE1] ">126$</h2>
                            <div className="text-center price-list py-2 mt-4 text-lg">
                                <li>5GB Linux Web Space</li>
                                <li>5 MySQL Databases</li>
                                <li>24/7 Tech Support</li>
                                <li>Daily Backups</li>
                            </div>
                        </div>
                        <button className='px-8 py-3 text-lg font-medium text-white features-btn mt-[-25px]'>Sing Up</button>
                    </div>
                </div>
                <p className="text-xl font-semibold">Not sure what to choose? <span className="text-[#5029DE] cursor-pointer">Contact Us</span></p>
            </div>
        </div>
    );
};

export default Pricing;