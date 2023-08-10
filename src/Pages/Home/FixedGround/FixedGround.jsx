

import './FixedGround.css'
import iconImg from '../../../assets/img/google-play.png'
import iconImg2 from '../../../assets/img/app-store.png'
const FixedGround = () => {
    return (
        <div className='py-12 '>
            <div className="imgFixed bg-fixed">
                <div className="lg:px-28 md:px-12 px-8 py-8 z-10">
                    <div className='mamon lg:mt-12 md:mt-4  text-white text-center flex justify-center items-center flex-col'>
                        <h2 className='lg:text-4xl md:text-2xl text-xl font-bold lg:py-4 py-2'>Mamondots is available for all devices</h2>
                        <p className="w-[65%]  text-white text-lg">Mamondots is available for all devices, consectetur adipisicing elit. Itaque at harum quam explicabo. Aliquam optio, delectus, dolorem quod neque eos totam. Delectus quae animi tenetur voluptates doloribus commodi dicta modi aliquid deserunt, quis maiores nesciunt autem, aperiam natus.</p>
                        <div className='lg:flex lg:gap-4 gap-2 justify-start items-center lg:ml-60 mt-8 hidden lg:block'>
                            <img className='w-[30%] h-[30%]' src={iconImg} alt="" />
                            <img className='w-[30%] h-[30%]' src={iconImg2} alt="" />
                        </div>
                        <p className='text-white py-2 mt-2'>* Available on iPhone, iPad and all Android devices</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FixedGround;