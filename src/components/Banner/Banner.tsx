import React from "react";
import banner from '../../assets/banner.jpg';
import './Banner.css'

const Banner: React.FC = () => {
    return(
        <img  src={banner} alt="Banner" className="banner-image"></img>
    )
}

export default Banner;