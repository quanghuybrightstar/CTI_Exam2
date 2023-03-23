import React from 'react';
import { Row, Col, Image, Button } from 'antd';
import Sidebar from '../Sidebar';
import { Container } from '@/src/store/globalStyle';
import styled from 'styled-components';
import { dataRestaurants, bookingURLImg } from '@/src/store/data';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillClockCircle, AiFillHeart } from 'react-icons/ai';
import { StyledButton } from '@/src/store/globalStyle';
import {BsFillDoorOpenFill} from 'react-icons/bs';

const StyledRow = styled(Row)``;

const StyledCol = styled(Col)`
  padding: 1.5rem 0;
  background: #f2f2f2;
`;

const StyledColRestaurant = styled(Col)`
  padding: 1.3rem 0 0;
  border-radius: 0.6rem;
`;

const ItemContainer = styled.div`
  position: relative;
  background: white;
  margin: 0 0.9rem;
  border-radius: 0.6rem;
  transition: transform ease-in 0.1s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
`;

const RestaurantTextInfo = styled.div`
  padding: 0.7rem 1rem 1.4rem;
`;

const RestaurantName = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 0.8rem;
`;

const RestaurantInfoWrapprer = styled.div`
  display: flex;
  flex-decoration: row;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const RestaurantInfoText = styled.div`
  font-size: 0.8rem;
  margin-left: 1.1rem;
`;

const RestaurantStatusText = styled.div`
  color: #1dac0e;
  font-size: 0.8rem;
  margin-left: 0.8rem;
`;

const StyledImage = styled(Image)`
  border-radius-top: 0.6rem;
`;

const RestaurantTimeContainer = styled.div`
  display: flex;
  flex-decoration: row;
  justify-content: space-between;
  flex: 1;
  margin-left: 0.8rem;
  font-size: 0.75rem;
`;

const RestaurantTimeContainerFirst = styled.div`
  background: rgba(46, 146, 255, 0.2);
  border-radius: 0.65rem;
  padding: 0.2rem 0.4rem;
  text-align: center;
`;

const RestaurantTimeContainerSecond = styled.div`
  background: rgba(29, 172, 14, 0.2);
  border-radius: 0.65rem;
  padding: 0.2rem 0.4rem;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;
const BookingBtnWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ImageNormal = styled.img`
  width: 2.5rem;
  position: absolute;
  right: 0;
  bottom: 0.8rem;
`;

const StyledBookingBtn = styled.button`
  font-size: 0.7rem;
  color: white;
  background: #f06ec4;
  position: absolute;
  padding: 0.3rem;
  border-radius: 0.6rem;
  border: #f06ec4;
  bottom: 0;
  right: 0;
  cursor: pointer;

  &:hover {
    border-color: #f06ec4 !important;
    color: white !important;
    opacity: 0.8;
  }
`;

const StyledColLoadMore = styled(Col)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.3rem 0 0.5rem;
`;

const MoreButton = styled(Button)`
  background-color: #fff;
  font-size: 1rem;
  color: #828282;
  line-height: 100%;
  padding: 0.3rem 1.3rem;
  border-radius: 0.6rem;

  &:hover {
    border-color: #fff !important;
    color: #828282 !important;
    opacity: 0.8;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  width: 85%;
  top: 0;
  padding: 1rem 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const IconHeartWrapper = styled.div`
  padding: 0.2rem 0.4rem 0.06rem;
  background: #F24405;
  border-radius: 50%;
`;

const SaleOffWrapper = styled.div`
font-size: 0.7rem;
color: white;
background: #1DAC0E;
position: absolute;
padding: 0.3rem 0.5rem;
border-radius: 0.6rem;
border: #1DAC0E;
position: absolute;
right: 0;
font-weight: 700;
`

const Main: React.FC = () => {
  return (
    <Container>
      <Row wrap gutter={[16, 24]} style={{ height: '100%' }}>
        <Sidebar></Sidebar>

        <StyledCol span={18}>
          <StyledRow>
            {dataRestaurants.map((restaurant: IRestaurantItem) => (
              <StyledColRestaurant span={8} key={restaurant.id}>
                <ItemContainer>
                  <StyledImage src={restaurant.urlImage} />
                  <RestaurantTextInfo>
                    <RestaurantName>{restaurant.name}</RestaurantName>

                    <RestaurantInfoWrapprer>
                      <FaMapMarkerAlt size={'1.5rem'} />
                      <RestaurantInfoText>
                        {restaurant.address}
                      </RestaurantInfoText>
                    </RestaurantInfoWrapprer>

                    <RestaurantInfoWrapprer>
                      <BsFillDoorOpenFill size={'1.3rem'} />
                      <RestaurantStatusText>
                        {restaurant.statusOpen}
                      </RestaurantStatusText>
                    </RestaurantInfoWrapprer>

                    <RestaurantInfoWrapprer>
                      <AiFillClockCircle size={'1.3rem'} />

                      <RestaurantTimeContainer>
                        <RestaurantTimeContainerFirst>
                          {restaurant.time_open} - {restaurant.time_close}
                        </RestaurantTimeContainerFirst>

                        <RestaurantTimeContainerSecond>
                          {restaurant.time_open} - {restaurant.time_close}
                        </RestaurantTimeContainerSecond>
                      </RestaurantTimeContainer>
                    </RestaurantInfoWrapprer>

                    <ButtonWrapper>
                      <StyledButton style={{ margin: 0, fontSize: '0.9rem' }}>
                        Delivery
                      </StyledButton>

                      <BookingBtnWrapper>
                        <ImageNormal src={bookingURLImg}></ImageNormal>
                        <StyledBookingBtn>Booking</StyledBookingBtn>
                      </BookingBtnWrapper>
                    </ButtonWrapper>
                  </RestaurantTextInfo>

                  <IconWrapper>
                    <IconHeartWrapper>
                      <AiFillHeart style = {{color: 'white'}} size = {'1.2rem'}/>
                    </IconHeartWrapper>

                    <SaleOffWrapper>
                        {restaurant.saleOff}
                    </SaleOffWrapper>
                  </IconWrapper>
                </ItemContainer>

              </StyledColRestaurant>
            ))}

            <StyledColLoadMore span={24}>
              <MoreButton>Load more</MoreButton>
            </StyledColLoadMore>
          </StyledRow>
        </StyledCol>
      </Row>
    </Container>
  );
};

export default Main;
