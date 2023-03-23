import styled from 'styled-components';
import {Button} from 'antd';

export const Container = styled.div`
  max-width: 120rem;
  padding-left: 10rem;
  padding-right: 10rem;
  margin: 0 auto;
  background: #f2f2f2;
  border-bottom: 1px solid #e0e1e0;
`;

export const GridRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`;

export const StyledButton = styled(Button)`
background-color: #ff881d;
font-size: 1rem;
font-weight: 700;
color: white;
line-height: 100%;
padding: 0.3rem 1.3rem;
border-radius: 0.6rem;
margin-left: 5.6rem;
margin-right: 2rem;

&:hover {
  border-color: #ff881d !important;
  color: white !important;
  opacity: 0.8;
}
`;

