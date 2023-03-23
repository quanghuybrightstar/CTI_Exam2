import Image from 'next/image';
import React from 'react';
import { Select, Button, Row, Col } from 'antd';
import styled from 'styled-components';
import * as data from '@/src/store/data';

import { Container } from '@/src/constants/globalStyle';

const StyledNameTitle = styled.div`
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
`;

const StyledInfoItem = styled.a`
  display: block;
  line-height: 1.6rem;
  font-size: 0.8rem;
`;

const StyledAddressCompany = styled.div`
  line-height: 1.6rem;
  font-size: 0.8rem;
  position: relative;
`;

const StyledPhoneNumber = styled.a`
  color: #f24405;
`;

const StyledEmail = styled.a`
  color: #2e92ff;
`;

const StyledImage = styled(Image)`
  padding-top: 1rem;
`;

const StyledCenterCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledCopyRight = styled.p`
  display: block;
  font-size: 0.7rem;
  color: #828282;
  margin-bottom: 1.8rem;
`;

const StyledSocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledSocialLink = styled.a`
  display: inline-block;
  margin: 0 0.5rem;

  &:hover {
    opacity: 0.8;
  }
`;

const Footer = () => {
  return (
    <Container style={{ border: 'none', background: 'white' }}>
      <Row wrap gutter={[16, 24]} style={{ padding: '2.5rem 0' }}>
        <Col span={6}>
          <StyledNameTitle>Công ty</StyledNameTitle>
          {data.infoCompany.map((value: IInfoCompanyItem) => (
            <StyledInfoItem key={value.id} href="#">
              {value.title}
            </StyledInfoItem>
          ))}
        </Col>

        <Col span={4}>
          <StyledNameTitle>App Capichi</StyledNameTitle>
          <StyledInfoItem>
            <Image
              src={data.iosURLImg}
              width={88}
              height={88}
              alt="IOS Image"
            ></Image>
          </StyledInfoItem>
          <StyledInfoItem>
            <Image
              src={data.androidURLImg}
              width={88}
              height={88}
              alt="Android Image"
            ></Image>
          </StyledInfoItem>
        </Col>

        <StyledCenterCol span={7}>
          <StyledImage
            src={data.capichiLogoURLImg}
            alt="Capichi Logo full"
            width={212}
            height={62}
          ></StyledImage>
          <StyledCopyRight>
            @ Capichi 2021 - A Food Delivery Corporation
          </StyledCopyRight>

          <StyledSocialWrapper>
            {data.socialConnect.map((social: ISocialLink) => (
              <StyledSocialLink key={social.id} href={social.link}>
                <StyledImage
                  src={social.urlImage}
                  alt={social.link}
                  width={24}
                  height={24}
                ></StyledImage>
              </StyledSocialLink>
            ))}
          </StyledSocialWrapper>
        </StyledCenterCol>

        <Col
          span={7}
          style={{
            textAlign: 'right',
          }}
        >
          <StyledNameTitle>Địa chỉ công ty</StyledNameTitle>
          {data.addressCompany.map((value: IInfoCompanyItem) => (
            <StyledAddressCompany key={value.id}>
              {value.title}
            </StyledAddressCompany>
          ))}
          <StyledAddressCompany>
            Số điện thoại:
            <StyledPhoneNumber href="tel: 1900 1522">
              1900 1522
            </StyledPhoneNumber>
          </StyledAddressCompany>
          <StyledAddressCompany>
            Email:
            <StyledEmail href="mailto: capichi@gmail.com">
              capichi@gmail.com
            </StyledEmail>
          </StyledAddressCompany>

          <StyledImage
            src={data.privacyURLImg}
            alt="Privacy Image"
            width={164}
            height={50}
          ></StyledImage>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
