import React from "react";
import Slider from "react-slick";
import Headphone from "../assets/hero/Headphone.png";
// import Vr from "../assets/category/vr.png";
// import Macbook from "../assets/category/macbook.png";

export default function Homepage() {
    // Pengaturan slick slider
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    const HeroSlide = [
        {
            id: 1,
            image: Headphone,
            title: "Headphone",
            title2: "Wireless",
            subtitle: "Beats Studio3 Wireless",
            description:
                "Experience high-quality sound with the wireless Beats Studio3. Enjoy the ultimate listening experience with noise-canceling technology and 22 hours of battery life.",
        },
        {
            id: 2,
            image: Headphone,
            title: "VR Headset",
            title2: "Immersive Experience",
            subtitle: "Oculus Quest 2",
            description:
                "Dive into a new world with the Oculus Quest 2. Wireless VR headset for an immersive, untethered gaming experience.",
        },
        {
            id: 3,
            image: Headphone,
            title: "MacBook",
            title2: "Pro",
            subtitle: "Apple MacBook Pro M1",
            description:
                "The MacBook Pro M1 offers exceptional performance, long battery life, and a stunning Retina display. Perfect for work, play, and everything in between.",
        },
    ];

    return (
        <div>
            <div className="w-full">
                <Slider {...settings}>
                    
                </Slider>
            </div>
        </div>
    );
}
