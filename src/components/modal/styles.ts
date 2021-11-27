import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #000;
  border-radius: 8px;
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -200px;
  background-color: ghostwhite;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 8px;
  padding: 0px 10px;
  height: 40px;
  margin-bottom: 10px;
`;

export const CloseModalBtn = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-self: flex-end;
  margin-bottom: 30px;
`;