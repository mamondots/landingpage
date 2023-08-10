import { BsLightbulb } from "react-icons/bs";
import Heading from "../../Components/Heading/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slideImg01 from '../../../assets/img/project01.jpg';
import slideImg02 from '../../../assets/img/project02.jpg';
import slideImg03 from '../../../assets/img/project03.jpg';
import slideImg04 from '../../../assets/img/project04.jpg';
import slideImg05 from '../../../assets/img/project05.jpg';

import './Portfolio.css'

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        autoplay: true,
        autoplaySpeed:2000,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div id='portfolio' className="lg:px-28 md:px-12 px-8 py-8">
            <div>
                <Heading
                    headingIcon={
                        <BsLightbulb></BsLightbulb>
                    }
                    fsubHeading='Awesome'
                    SsubHeading='Interface'
                    headingTitle='Simple & Beautiful Interface'
                    headDeatils='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati  dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.'
                >

                </Heading>
            </div>
            <div className="mt-12">
                <Slider {...settings}>
                    <div className="px-1">
                        <img src={slideImg01} alt="" />
                    </div>
                    <div className="px-1">
                    <img src={slideImg02} alt="" />
                    </div>
                    <div className="px-1">
                    <img src={slideImg03} alt="" />
                    </div>
                    <div className="px-1">
                    <img src={slideImg04} alt="" />
                    </div>
                    <div className="px-1">
                    <img src={slideImg05} alt="" />
                    </div>
                    
                    
                </Slider>
            </div>
        </div>
    );
};

export default Portfolio;