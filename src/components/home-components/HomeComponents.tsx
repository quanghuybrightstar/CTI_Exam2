import { Header, Slider, Main, Footer } from '@/src/containers/home-containers';
import styled from 'styled-components';

const HomeComponent = () => {
  
  const StyledLayout = styled.div`
    background-color: white;
    overflow-x: hidden;
  `;

  return (
    <StyledLayout>
      <Header></Header>
      <Slider></Slider>
      <Main></Main>
      <Footer></Footer>
    </StyledLayout>
  );
};

export default HomeComponent;