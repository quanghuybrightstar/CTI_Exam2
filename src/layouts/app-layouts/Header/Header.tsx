import Image from 'next/image';
import React from 'react';
import { Select, Button } from 'antd';
import Input from 'rc-input';
import { GoSearch } from 'react-icons/go';
import styled from 'styled-components';
import { cityList } from '@/src/store/data';
import { AiOutlineDown } from 'react-icons/ai';
import { StyledButton } from '@/src/store/globalStyle';

const { Option } = Select;

const HeaderContainer = styled.div`
  padding: 1.3rem 4rem;
  background-color: white;
  width: 100%;
  border-bottom: 1px solid #e0e1e0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 7rem;
`;

const StyledSelect = styled(Select)`
  .ant-select-arrow {
    color: #ff881d !important;
  }

  .ant-select-selector {
    border: 1px solid #ff881d !important;
    align-items: center;
  }
`;

const InputWrapper = styled.div`
  border: 1px solid #e0e1e0;
  padding: 0.5rem 1.5rem;
  background-color: #fbfbfb;
  display: flex;
  flex: 0.8;
  align-items: center;
  border-radius: 0.6rem;
  margin-left: 2.3rem;
`;

const StyledInput = styled(Input)`
  background-color: #fbfbfb;
  border: none;
  outline: none;
  margin-left: 0.85rem;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.3rem 0;
  width: 100%;
`;

const StyledLogin = styled.a`
  color: #007aff;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.3rem;
  font-style: normal;
  text-align: center;
  margin-left: 1.5rem;
  text-decoration: none;
  border-bottom: 1px solid #007aff;
`;

const LangagueSelect = styled.div`
  border: 1px solid #ff881d;
  padding: 0.3rem 0.4rem;
  border-radius: 0.5rem;
  display: flex;
  flex-decoration: row;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const NameLanguage = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0 0.5rem;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Image
        src="/images/logo.png"
        alt="Logo Capachi"
        width={138}
        height={41}
      ></Image>

      <NavbarContainer>
        <StyledSelect
          showSearch
          placeholder="Chọn thành phố"
          defaultValue={'Ha noi'}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={cityList}
        />

        <InputWrapper>
          <GoSearch style={{ color: '#ff881d', fontSize: '0.9rem' }} />
          <StyledInput placeholder="Nhập từ khóa ... "></StyledInput>
        </InputWrapper>

        <StyledButton>Order</StyledButton>

        <LangagueSelect>
          <Image
            src="/images/vietnamese.png"
            alt="Vietnamese language"
            width={28}
            height={20}
          ></Image>

          <NameLanguage>VIE</NameLanguage>

          <AiOutlineDown style={{ color: '#ff881d', fontSize: '0.9rem' }} />
        </LangagueSelect>

        <StyledLogin href="#">Đăng nhập</StyledLogin>
      </NavbarContainer>
    </HeaderContainer>
  );
};

export default Header;
