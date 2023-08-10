import CountUp from 'react-countup';

const Counter = () => {
    
    return (
        <div>
            
            <div className="grid lg:grid grid-cols-4 lg:px-28 md:px-12 px-8 lg:py-16 py-8 text-center">
            <div>
                <p className="lg:text-7xl md:text-3xl text-2xl font-bold  text-[#5E2CE1]">
                <CountUp start={0} end={10} ></CountUp>M
                
                </p>
                <h2 className="lg:text-2xl md:text-xl text-lg font-medium lg:py-2">Users</h2>
            </div>
            <div>
                <p className="lg:text-7xl md:text-3xl text-2xl font-bold  text-[#5E2CE1]">
                <CountUp start={0} end={23}></CountUp>K
                </p>
                <h2 className="lg:text-2xl md:text-xl text-lg font-medium lg:py-2">Download</h2>
            </div>
            <div>
                <p className="lg:text-7xl md:text-3xl text-2xl font-bold  text-[#5E2CE1]">
                <CountUp start={0} end={9}></CountUp>M
                </p>
                <h2 className="lg:text-2xl md:text-xl text-lg font-medium lg:py-2">Customer</h2>
            </div>
            <div className=''>
                <p className="lg:text-7xl md:text-3xl text-2xl font-bold  text-[#5E2CE1]">
                <CountUp start={0} end={12}></CountUp>k
                </p>
                <h2 className="lg:text-2xl md:text-xl text-lg font-medium lg:py-2">Developer</h2>
            </div>
        </div>
          
            
        </div>
    );
};

export default Counter;