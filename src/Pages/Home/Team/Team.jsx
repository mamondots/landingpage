import { useEffect, useState } from 'react';
import Heading from '../../Components/Heading/Heading';
import './Team.css'

import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa";

const Team = () => {
    const [members,setMembers] = useState([])
    useEffect(() =>{
        fetch('team.json')
        .then(res =>res.json())
        .then(data =>{
            setMembers(data)
        })
    },[])
    return (
        <div id='team' className="lg:px-28 md:px-12 px-8 py-8">
            <Heading
            
            
            headingTitle='Our Team Experts'
            headDeatils='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.'
           >
          
           </Heading>
           <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-8 md:gap-4  py-12 mt-8 relative space-y-2'>
               {
                  members.map((member,index) =><div
                  key={member.index}
                  >
                    <div className='all cursor-pointer'>
                    <div className='teamImg rounded-xl'>
                    <img className='rounded-xl' src={member.image} alt="" />
                    </div>
                    <div className='flex justify-center items-center flex-col personDetails absolute lg:top-[40%] lg:ml-12 text-white'>
                       <h2 className='text-2xl font-semibold'>{member.name}</h2>
                       <p className='text-lg'>{member.position}</p>
                       <div className='flex mt-2 space-x-2 cursor-pointer'>
                        <p className='hover:scale-125 duration-300'><FaFacebookF></FaFacebookF></p>
                        <p className='hover:scale-125 duration-300'><FaTwitter></FaTwitter></p>
                        <p className='hover:scale-125 duration-300'><FaInstagram></FaInstagram></p>
                        <p className='hover:scale-125 duration-300'><FaLinkedinIn></FaLinkedinIn></p>
                       </div>
                    </div>
                    </div>

                  </div>)
               }
           </div>
        </div>
    );
};

export default Team;