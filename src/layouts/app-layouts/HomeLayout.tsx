import Header from './Header';
import Main from './Main';
import Slider from './Slider';
import Footer from './Footer';
import styled from 'styled-components';

const HomeLayout = () => {
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

export default HomeLayout;
