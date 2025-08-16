
import { useEffect } from "react";



function ComingSoon({ComingSoonImg,text1,text2}) {

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center pt-10 px-4">
        
        {/* Illustration */}
        <img
          src={ComingSoonImg}
          alt="Coming Soon"
          className="w-56 sm:w-72 lg:w-96 h-auto mb-6"
          loading="lazy"
        />

        {/* Heading */}
        <h1  className="font-cabin font-bold text-3xl sm:text-5xl text-gray-200 leading-tight mb-3">
         <span  className=''>{text1}</span> <span >{text2}</span>
        </h1>


      </div>
    </>
  );
}

export default ComingSoon;
