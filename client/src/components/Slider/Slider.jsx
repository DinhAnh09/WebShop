import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://img3.thuthuatphanmem.vn/uploads/2019/10/14/anh-lookbook-thoi-trang_113854100.jpg",
        "https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-dep-nhat_113856413.png",
        "https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-truyen-thong-thoi-trang_113858788.jpg",
      ];
const prevSlide =()=>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
};
const nextSlide =()=>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
};

    return (
        <div className='slider'>
            <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>

        </div>
    );
};

export default Slider;