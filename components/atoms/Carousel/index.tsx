import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {media} from "../../../public/assets/styles/Media.style";

const Img = styled.div`
  width: 100%;
  height: 400px;
  ${media.sm`
    height:250px;
  `} //object-fit: cover;
          //object-position: 100% auto;
  background-image: url('${(props: { src: string }) => props.src}');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
`

interface IProps {
    imgUrl: String[];
}

const Carousel = ({imgUrl}: IProps) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <Slider {...settings}>
            {
                imgUrl.map((url: String, idx: number) => (
                    <Img src={url} key={idx}/>
                ))
            }
        </Slider>
    );
}
export default Carousel;
