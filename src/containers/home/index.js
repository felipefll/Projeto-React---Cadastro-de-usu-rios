import React, { useState, useRef } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import { Container, Image, InputLabel, Input,} from './style'
import People from '../../assets/people.png'
import Arrow from '../../assets/arrow.png'

import { H1 } from "../../components/title/style";
import ContainerItens from "../../components/containeritens";
import Button from "../../components/button";



function App() {

  const [users, setUsers] = useState([]);
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    history.push('/usuarios')
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default App