import Image from 'next/image';
import React, { useState } from 'react';
import { Select, Button, Row, Col } from 'antd';
import { List } from 'antd';
import { Container } from '@/src/store/globalStyle';
import { dataCategories } from '@/src/store/data';
import styled from 'styled-components';

const StyledCol = styled(Col)`
  position: relative;
  padding: 2.5rem 1.5rem;
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: #d9d9d9;
  }

  ::-webkit-scrollbar-thumb {
    background: #ff881d;
  }

  border-left: 1px solid #d9d9d9;
  box-shadow: 1px 2px #d9d9d9;
  background: white;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-decoration: row;
  align-items: center;
  background: ${(props) => (props.key === 1 ? '#ff881d' : 'white')};
  padding: 0.5rem;
  background: white;
  border-radius: 0.6rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #ffc999;
  }
`;

const CategoryItemName = styled.p`
  margin: 0 1rem;
  font-size: 1rem;
`;

const Sidebar: React.FC = () => {
  return (
    <StyledCol span={6}>
      {dataCategories.map((category: ICategoryItem) => (
        <CategoryItem key={category.id}>
          <Image
            src={category.urlImage}
            alt={category.name}
            width={32}
            height={32}
            style={{ borderRadius: '50%' }}
          ></Image>
          <CategoryItemName>{category.name}</CategoryItemName>
        </CategoryItem>
      ))}
    </StyledCol>
  );
};

export default Sidebar;
