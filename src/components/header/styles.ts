import styled from 'styled-components';
import { MdAdd } from "react-icons/md";

export const Container = styled.div`
  background-color: #191920;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 100px 10px 100px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 40px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: 40px;
  border-radius: 8px;
  padding: 0px 10px;
`;

export const Icon = styled(MdAdd)`
  margin-left: 5px;
`;