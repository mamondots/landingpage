import Heading from "../../Components/Heading/Heading";
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="lg:px-28 md:px-12 px-8 py-8">
            <div className="">
            <Heading
            
            
             headingTitle='Subscribe to get updates'
             headDeatils='By subscribing you will get newsleter, promotions adipisicing elit. Architecto beatae, asperiores tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.'
            >
           
            </Heading>
              <form className="py-16 lg:px-56 md:px-20">
                   
                   <input className="w-full emailbox text-lg font-medium bg-white py-4 px-8 " type="email" name="email" placeholder="Enter Your Email" />
                   <input className="w-full bg-[#7C4FE0] mt-4 py-4 rounded-lg text-lg font-medium text-white cursor-pointer" type="submit" value="Subscribe" />
              </form>
            </div>
        </div>
    );
};

export default Subscribe;