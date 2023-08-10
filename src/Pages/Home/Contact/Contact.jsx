import Heading from '../../Components/Heading/Heading';
import './Contact.css'
import { FaHome,FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    return (
        <div id='contact' className="lg:px-28 md:px-12 px-8 py-8">
            <Heading
            
            
            headingTitle='Stay Tuned'
            headDeatils='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.'
           >
          
           </Heading>

           <div className='grid lg:grid-cols-2 lg: gap-24 py-12'>
              <div>
                   <p className='text-lg text-[#565656]'>
                   Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                   </p>
                   <div className='mt-12 space-y-4'>
                        <div className='flex items-center'>
                            <p className='text-2xl font-semibold px-3 py-3 bg-[#7C4FE0] text-white rounded mr-2'><FaHome></FaHome></p>
                            <p className='text-base font-medium text-[#262626ac]'>Road No:02, House No:20, Mirpur, <br/>Dhaka,Bangladesh</p>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-2xl font-semibold px-3 py-3 bg-[#7C4FE0] text-white rounded mr-2'><FaPhoneAlt></FaPhoneAlt></p>
                            <p className='text-base font-medium text-[#262626ac]'>
                                +88016462*****
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-2xl font-semibold px-3 py-3 bg-[#7C4FE0] text-white rounded mr-2'><MdEmail></MdEmail></p>
                            <p className='text-base font-medium text-[#262626ac]'>
                                mamonrabin@gmail.com
                            </p>
                        </div>
                   </div>
              </div>

              <div>
                 <form className='space-y-4'>
                       <input className="w-full border text-lg font-medium bg-white py-2 px-4 " type="text" placeholder='Name' />
                       <input className="w-full border text-lg font-medium bg-white py-2 px-4 " type="text" placeholder='Email' />
                       <input className="w-full border text-lg font-medium bg-white py-2 px-4 " type="text" placeholder='Subject' />
                       <textarea placeholder='Your message' className='w-full border py-2 px-4'></textarea>
                       <input className="w-full bg-[#7C4FE0] mt-4 py-4 rounded-lg text-lg font-medium text-white cursor-pointer" type="submit" value="Send Message" />
                 </form>
              </div>

           </div>
        </div>
    );
};

export default Contact;