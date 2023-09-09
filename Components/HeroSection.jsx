"use client"

import { useEffect, useState } from "react";

const HeroSection = () => {
    const [index, setIndex]= useState(0)
    const menWithWristWatch = [
        {
            id:1,
            img:"https://media.istockphoto.com/id/1412825823/photo/crop-male-executive-checking-time.jpg?s=612x612&w=0&k=20&c=lrOYLIXWSGX3W7NAAoljtZ9YbyitMz-OX-d9Y9iDxxA=",

        },
        {
            id:2,
            img:"https://media.istockphoto.com/id/1385106660/photo/mens-watch-and-hand-in-pocket.jpg?s=612x612&w=0&k=20&c=Uiw-QZ6tcQv6bWgCppslRf7Qz05EqaKB3NDz3fOqfZc="
        },
        {
            id:3,
            img:"https://media.istockphoto.com/id/1065329058/photo/premium-mens-watch-on-hand-close-up.jpg?s=612x612&w=0&k=20&c=VdpUac8ObrDZZ0I8OCD_vOxPqyOUCa3cM8zoqXsPkuE="
        },
        {
            id:4,
            img:"https://media.istockphoto.com/id/1446116852/photo/man-runner-and-smartwatch-outdoor-for-workout-listening-to-music-radio-or-streaming-on-web.jpg?s=612x612&w=0&k=20&c=Hdd-Djhh5R4J7rZrtiAOIdraVVrFra-Cr0CltxA-a4g="
        }
    ]
    const image = menWithWristWatch[index];
    const Next = ()=>{
        setIndex((index)=>{
            let newIndex = index + 1;
            if(newIndex>menWithWristWatch.length-1){
                return 0;
            }
            return newIndex
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
          Next();
        }, 8000); 
    
        
        return () => {
          clearInterval(interval);
        };
      }, []);
    return ( 
        <section className="mt-20 ml-2 mr-2">
            {/* hero bg con */}
            <div className="h-72 w-full bg-cover bg-no-repeat bg-center rounded-md lg:w-5/6 lg:mx-auto " style={{backgroundImage:`url(${image.img})`}}>
                {/* Hero text con */}
                <div className="flex justify-center pt-10 h-full w-full bg-gradient-to-b from-overlay to-overlay ">
                    <h1 className="text-white text-4xl text-center">Elevate Your  Timepiece <br/> Game!</h1>
                </div>
            </div>
        </section>
     );
}
 
export default HeroSection;