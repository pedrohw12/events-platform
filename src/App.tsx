import { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Modal from "./components/modal";
import GlobalStyle from "./styles/global";

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

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header onClick={() => setIsModalVisible(true)} />
      {isModalVisible && <Modal onClick={() => setIsModalVisible(false)} />}
      {events.map((event: Event) => (
        //@ts-ignore
        <Dashboard key={event.id} event={event} />
      ))}
      <GlobalStyle />
    </>
  );
}

export default App;
