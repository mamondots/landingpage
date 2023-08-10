import workImg from '../../../../assets/img/download.png'
import workImg2 from '../../../../assets/img/settings.png'
import workImg3 from '../../../../assets/img/app.png'

const FeaturesWork = () => {
    return (
        <div className="lg:px-28 md:px-12 px-8 bg-gradient-to-r from-[#5B36E0] to-[#883CE8]">
            <div className="text-center py-12 flex flex-col justify-center items-center">
                  <h2 className="lg:text-4xl md:text-2xl text-xl font-semibold text-white py-4">How Mamondots works?</h2>
                  <p className="lg:w-[60%] text-white font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
            </div>
              
              <div className="grid  lg:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-4 gap-2  text-center">
                   <div className='flex justify-center items-center flex-col'>
                        <img className='w-[20%]' src={workImg} alt="" />
                        <h2 className='text-2xl font-semibold text-white py-2'>Install the App</h2>
                        <p className='text-white pb-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius saepe, voluptates quis enim incidunt obcaecati?</p>
                   </div>
                   <div className='flex justify-center items-center flex-col'>
                   <img className='w-[20%]' src={workImg2} alt="" />
                        <h2 className='text-2xl font-semibold text-white py-2'>Setup your profile</h2>
                        <p className='text-white pb-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius saepe, voluptates quis enim incidunt obcaecati?</p>
                   </div>
                   <div className='flex justify-center items-center flex-col'>
                   <img className='w-[20%]' src={workImg3} alt="" />
                        <h2 className='text-2xl font-semibold text-white py-2'>Enjoy the features!</h2>
                        <p className='text-white pb-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius saepe, voluptates quis enim incidunt obcaecati?</p>
                   </div>
              </div>
        </div>
    );
};

export default FeaturesWork;