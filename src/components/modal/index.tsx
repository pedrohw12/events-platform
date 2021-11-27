import axios from "axios";
import { useState } from "react";
import { CloseModalBtn, Container, Input } from "./styles";

type Props = {
  onClick: () => any;
};

const Modal = ({ onClick }: Props) => {
  const [eventName, setEventName] = useState("");
  const [eventLocal, setEventLocal] = useState("");
  const [eventDay, setEventDay] = useState("");
  const [eventTime, setEventTime] = useState("");

  function handleSubmit() {
    axios
      .post("http://localhost:3333/events", {
        nomeevento: eventName,
        local: eventLocal,
        diasemana: eventDay,
        horario: eventTime,
      })
      .then((response) => {
        alert("Evento cadastrado com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <CloseModalBtn onClick={onClick}>X</CloseModalBtn>
      <Input
        placeholder="Nome do evento"
        onChange={(e) => setEventName(e.target.value)}
      />
      <Input
        placeholder="Local"
        onChange={(e) => setEventLocal(e.target.value)}
      />
      <Input placeholder="Dia" onChange={(e) => setEventDay(e.target.value)} />
      <Input
        placeholder="Horário"
        onChange={(e) => setEventTime(e.target.value)}
      />
      <button onClick={handleSubmit}>Cadastrar evento</button>
    </Container>
  );
};

export default Modal;
