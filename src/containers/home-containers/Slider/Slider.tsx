import Image from 'next/image';
import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import * as data from '@/src/store/data';

const CarouselContainer = styled(Carousel)`
  > .slick-dots li button {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    background: #c4c4c4;
    position: absolute;
    bottom: -1rem;
  }
  > .slick-dots li.slick-active button {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    background: #ff810b;
  }

  border-bottom: 1px solid #e0e1e0;
  padding-bottom: 2rem;
  position: relative;
`;

const SliderImage1 = styled.div`
  position: relative;
  padding-top: 35%;
  background: url(${data.slider1URLImg}) no-repeat top center / cover;
`;
const SliderImage2 = styled.div`
  position: relative;
  padding-top: 35%;
  background: url(${data.slider2URLImg}) no-repeat top center / cover;
`;
const SliderImage3 = styled.div`
  position: relative;
  padding-top: 35%;
  background: url(${data.slider3URLImg}) no-repeat top center / cover;
`;

const Slider: React.FC = () => {
  return (
    <CarouselContainer autoplay>
      <SliderImage1></SliderImage1>
      <SliderImage2></SliderImage2>
      <SliderImage3></SliderImage3>
    </CarouselContainer>
  );
};

export default Slider;
