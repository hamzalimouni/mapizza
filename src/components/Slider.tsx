"use client";
import Image from "next/image"
import { useEffect, useState } from "react";

type Slider = {
    id: number;
    title: string;
    image: string;
}

const data: Slider[] = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() =>
            setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1))
        , 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">

            {/* TEXT CONTAINER  */}
            <div className="flex-1 flex items-center justify-center flex-col gap-6 xl:gap-8 text-red-500 font-bold">
                <h1 className="text-3xl text-center uppercase p-4 md:p-10 sm:text-4xl md:text-5xl xl:text-6xl">
                   {data[currentSlide].title }
                </h1>
                <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
            </div>

            {/* IMAGE CONTAINER  */}
            <div className="flex-1 relative">
                <Image src={data[currentSlide].image} alt="container image" fill className="object-cover" />
            </div>
        </div>
    )
}

export default Slider