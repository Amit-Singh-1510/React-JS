import "./App.css";
import Header from "./myComponents/header";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to the market to get this job done",
    },
    {
      sno: 1,
      title: "Go to the mall",
      desc: "you need to go to the market to get this job done 2",
    },
    {
      sno: 1,
      title: "Go to the ghat",
      desc: "you need to go to the market to get this job done 3",
    },
  ];
  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
