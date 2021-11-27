import axios from "axios";
import { useState } from "react";
import {
  BtnContainer,
  Container,
  DislikeBtn,
  ExcludeBtn,
  LikeBtn,
  LocalText,
  Text,
  Title,
} from "./styles";

type Props = {
  event: Event;
};

type Event = {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: null;
  dislike: null;
  created_at: string;
  updated_at: string;
};

const Dashboard = (props: Props) => {
  function handleDelete() {
    axios
      .delete(`http://localhost:3333/events/${props.event.id}`)
      .then((response) => {
        console.log(response);
        alert("Evento deletado com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  function handleLike() {
    axios
      .post(`http://localhost:3333/events/like/${props.event.id}`)
      .then((response) => {
        alert(`Likes: ${response.data.like}`);
      })
      .catch((err) => console.log(err));
  }

  function handleDislike() {
    axios
      .post(`http://localhost:3333/events/dislike/${props.event.id}`)
      .then((response) => {
        alert(`Likes: ${response.data.dislike}`);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Title>{props.event.nomeevento}</Title>
      <LocalText>{props.event.local}</LocalText>
      <Text>
        {props.event.diasemana}, {props.event.horario}
      </Text>
      <BtnContainer>
        <ExcludeBtn onClick={handleDelete}>Excluir</ExcludeBtn>
        <LikeBtn onClick={handleLike}>Like</LikeBtn>
        <DislikeBtn onClick={handleDislike}>Dislike</DislikeBtn>
      </BtnContainer>
    </Container>
  );
};

export default Dashboard;
