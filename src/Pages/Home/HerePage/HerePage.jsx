import './HomePage.css'
import bannerImg from '../../../assets/img/bg2.jpg'
import iconImg from '../../../assets/img/google-play.png'
import iconImg2 from '../../../assets/img/app-store.png'
import heroImg from '../.././../assets/img/welcome-mockup.png'

const HerePage = () => {
    return (
        <div id='home' className=''>
                 <div className='banner-img lg:h-[118vh] h-[90vh]'>
                     <img src={bannerImg} alt="" />
                 </div>
                 <div className='lg:grid lg:grid-cols-2 absolute lg:top-[25%] top-[10%] lg:px-28 md:px-12 px-8 py-8 '>
                      <div>
                        <h2 className='text-white lg:text-7xl md:text-4xl text-2xl  font-bold leading-none'>Creative way to Showcase your <br/>App</h2>
                        <p className='text-white font-medium w-[90%] lg:py-6 py-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.
                        </p>
                        <div className='flex lg:gap-4 gap-2'>
                            <img className='w-[30%] h-[30%]' src={iconImg} alt="" />
                            <img className='w-[30%] h-[30%]' src={iconImg2} alt="" />
                        </div>
                        <p className='text-white py-2'>* Available on iPhone, iPad and all Android devices</p>
                      </div>
                      <div>
                            <img className='w-[50%] ml-40 mt-[-40px] lg:block hidden' src={heroImg} alt="" />
                      </div>
                 </div>
        </div>
    );
};

export default HerePage;