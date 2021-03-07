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
  `}
  background-image: url('${(props: { url: string }) => props.url}');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
`

interface IProps {
    imgUrl: string[];
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
                imgUrl.map((item: string, idx: number) => (
                    <Img url={item} key={idx}/>
                ))
            }
        </Slider>
    );
}
export default Carousel;
