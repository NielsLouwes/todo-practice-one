import "./styles.css";
import styled from "styled-components";
import { useState } from "react";

const Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainHeader = styled.h1``;

const Input = styled.input``;

const Container = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

const Button = styled.button`
  margin-left: 1rem;
`;

const HorizontalContainer = styled.div``;

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const dummyData = ["Code", "Exercise", "Clean House"];

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const addItem = (e) => {
    e.prevent.Default();
    setTodos([...todos], {
      id: Date.now(),
      text: inputText,
      completed: false
    });
  };

  return (
    <Styled>
      <MainHeader>To Do List</MainHeader>
      <HorizontalContainer>
        <Input
          value={inputText}
          onChange={inputTextHandler}
          onSubmit={inputTextHandler}
          placeholder="Enter to do "
        ></Input>
        <Button type="submit">Submit</Button>
      </HorizontalContainer>
      <Container>
        <List>
          {dummyData.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </Container>
    </Styled>
  );
}

// {
//   filteredTodos.map((todo) => (
//     <Todo
//       key={todo.id}
//       todos={todos}
//       text={todo.text}
//       setTodos={setTodos}
//       todo={todo}
//     />
//   ));
// }
