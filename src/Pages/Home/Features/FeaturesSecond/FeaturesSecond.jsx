import featuresImg from '../../../../assets/img/features02.png'

import { BsCheckLg} from "react-icons/bs";

const FeaturesSecond = () => {
    return (
        <div className="grid lg:grid-cols-2 lg:gap-32">
            <div>
                <img className='lg:mt-0 mt-8' src={featuresImg} alt="" />
            </div>
            <div>
                <h2 className="lg:text-5xl font-bold lg:leading-tight">Easily communicate with clients using sApp.</h2>
                <div className="py-8 space-y-4 cursor-pointer">
                <div className="flex justify-center items-center ">
                    <p className="py-3 px-3 text-[#7C4FE0] bg-white text-3xl font-bold icon-box mr-4 "><BsCheckLg></BsCheckLg></p>
                    <p className='text-base font-medium text-[#696969]'>Combined with a handful of model sentence structures looks reasonable.</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="py-3 px-3 text-[#7C4FE0] bg-white text-3xl font-bold icon-box mr-4 "><BsCheckLg></BsCheckLg></p>
                    <p className='text-base font-medium text-[#696969]'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="py-3 px-3 text-[#7C4FE0] bg-white text-3xl font-bold icon-box mr-4 "><BsCheckLg></BsCheckLg></p>
                    <p className='text-base font-medium text-[#696969]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="py-3 px-3 text-[#7C4FE0] bg-white text-3xl font-bold icon-box mr-4 "><BsCheckLg></BsCheckLg></p>
                    <p className='text-base font-medium text-[#696969]'>All the Lorem Ipsum generators on the Internet tend to repeat necessary.</p>
                </div>
                </div>
                <button className='px-8 py-3 text-lg font-medium text-white features-btn'>learn More</button>
            </div>
        </div>
    );
};

export default FeaturesSecond;