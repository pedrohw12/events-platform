import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #000;
  border-radius: 8px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding: 10px 100px 10px 100px;
`;

export const Title = styled.h2``;

export const LocalText = styled.h3``

export const Text = styled.p``

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ExcludeBtn = styled.button`
  border: none;
  background-color: #f60942;
  margin: 5px;
  padding: 5px;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
`;

export const LikeBtn = styled.button`
  border: none;
  background-color: green;
  margin: 5px;
  padding: 5px;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
`;

export const DislikeBtn = styled.button`
  border: none;
  background-color: #aaa;
  margin: 5px;
  padding: 5px;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
`;