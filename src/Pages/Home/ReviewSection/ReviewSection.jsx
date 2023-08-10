import { BsLightbulb } from "react-icons/bs";
import Heading from "../../Components/Heading/Heading";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";


const ReviewSection = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('Review.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="lg:px-28 md:px-12 px-8 py-8">
            <div className="pt-12">
                <Heading
                    headingIcon={
                        <BsLightbulb></BsLightbulb>
                    }
                    fsubHeading='Customers'
                    SsubHeading='Reviews'
                    headingTitle='What Our Customers Are Saying'
                    headDeatils='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati  dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.'
                >

                </Heading>
            </div>
            <div className="py-12 mt-12">
                <Slider {...settings}>

                    {
                        reviews.map((review, index) => <div key={review.index}>

                            <div className="flex justify-center items-center flex-col">
                                <img className="w-[8%] rounded-full" src={review.image} alt="" />
                                <h2 className="text-xl font-bold pt-4 py-1">{review.name}</h2>
                                <p className="text-xl font-medium">{review.address}</p>

                                <div className="py-1">
                                    <Rating
                                        style={{ maxWidth: 120 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>

                                <p className="w-[56%] text-center">{review.details}</p>
                            </div>

                        </div>)
                    }

                </Slider>
            </div>
        </div>
    );
};

export default ReviewSection;