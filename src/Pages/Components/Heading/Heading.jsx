

const Heading = ({headingIcon,fsubHeading,SsubHeading,headingTitle,headDeatils}) => {
    return (
        <div className="text-center flex justify-center items-center flex-col">
            <div className="flex items-center text-lg font-medium">
                <p className=" px-1 text-[#7C4FE0]">{headingIcon}</p>
                <p className="px-1 text-[#7C4FE0]">{fsubHeading}</p>
                <p>{SsubHeading}</p>
            </div>
            <div>
            <h2 className="lg:text-4xl md:text-2xl text-xl font-bold lg:py-4 py-2">
                {headingTitle}
            </h2>
            <p className="w-[65%] lg:ml-48 md:ml-28 ml-20 text-[#565656] text-lg">{headDeatils}</p>
            </div>
        </div>
    );
};

export default Heading;