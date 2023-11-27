import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
const query = gql`
  query GetAllTodos {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <div className="box">
        {data.getTodos.map((todo, index) => (
          <div key={index}>
            <h1>Title: {todo.title}</h1>
            <h1>ID: {todo.user.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
