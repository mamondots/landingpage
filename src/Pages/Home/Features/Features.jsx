import { useEffect, useState } from "react";
import Heading from "../../Components/Heading/Heading";
import { BsLightbulb } from "react-icons/bs";
import './Features.css'
import FeaturesFirst from "./FeaturesFirst/FeaturesFirst";
import FeaturesSecond from "./FeaturesSecond/FeaturesSecond";
import FeaturesWork from "./FeaturesWork/FeaturesWork";

const Features = () => {
    const [dates,setDates] = useState([])
    useEffect(() =>{
        fetch('Features.json')
        .then(res => res.json())
        .then(data =>{
            setDates(data)
        })
    },[])
    return (
        <div id='features'>
            <div className="lg:px-28 md:px-12 px-8 pb-8">
            <div className="text-center">
            <Heading
             headingIcon={
                <BsLightbulb></BsLightbulb>
             }
             fsubHeading='Premium'
             SsubHeading='Features'
             headingTitle='What Makes Mamondots Different?'
             headDeatils='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati  dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.'
            >
           
            </Heading>
            </div>
            <div className="py-12">
                 <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-4 gap-2 text-center cursor-pointer">
                       {
                           dates.map((date,index) => <div
                           key={date.index}
                           >
                                <div className="flex flex-col justify-center items-center bg-white  features-box py-12 px-12">
                                <img className="w-[20%]" src={date.image} alt="" />
                                <h2 className="text-2xl font-semibold py-2">{date.title}</h2>
                                <p>{date.description}</p>
                                </div>
                           </div>) 
                       }
                 </div>
            </div>
            <div className="py-12">
                 <FeaturesFirst></FeaturesFirst>
            </div>
            <div className="py-12 pt-12">
            <FeaturesSecond></FeaturesSecond>
            </div>
            
            </div>
            <div className="py-12 pt-12 ">
              <FeaturesWork></FeaturesWork>
            </div>
        </div>
    );
};

export default Features;