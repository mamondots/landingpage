import './FeaturesFirst.css'
import { BiSolidLayer } from "react-icons/bi";
import { BsDropletFill} from "react-icons/bs";
import { FaBrush,FaCartArrowDown } from "react-icons/fa";
import featuresImg from '../../../../assets/img/features01.png'
const FeaturesFirst = () => {
    return (
        <div className="grid lg:grid-cols-2 lg:gap-32">
            <div>
                <h2 className="lg:text-5xl font-bold lg:leading-tight">Make Your Device Manage Everything For You</h2>
                <div className="py-8 space-y-4 cursor-pointer">
                <div className="flex justify-center items-center">
                    <p className="py-3 px-3 text-[#7C4FE0] bg-white text-3xl font-bold icon-box mr-4 "><BiSolidLayer></BiSolidLayer></p>
                    <p className='text-base font-medium text-[#696969]'>Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="py-3 px-3 text-[#7C4FE0] bg-white text-3xl font-bold icon-box mr-4 "><FaBrush></FaBrush></p>
                    <p className='text-base font-medium text-[#696969]'>Customizable design dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="py-3 px-3 text-[#7C4FE0] bg-white text-3xl font-bold icon-box mr-4 "><BsDropletFill></BsDropletFill></p>
                    <p className='text-base font-medium text-[#696969]'>Drop ipsum dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="py-3 px-3 text-[#7C4FE0] bg-white text-3xl font-bold icon-box mr-4 "><FaCartArrowDown></FaCartArrowDown></p>
                    <p className='text-base font-medium text-[#696969]'>Marketing chart dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</p>
                </div>
                </div>
                <button className='px-8 py-3 text-lg font-medium text-white features-btn'>learn More</button>
            </div>
            <div>
                <img className='lg:w-[70%] lg:ml-20 lg:mt-0 mt-8' src={featuresImg} alt="" />
            </div>
        </div>
    );
};

export default FeaturesFirst;