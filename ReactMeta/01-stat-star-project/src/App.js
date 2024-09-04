import "./index.css";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
export default function App(props) {
  const image = (
    <img
      width="20%"
      src="https://imgs.search.brave.com/qy6iRTgCYvH3HYdPqApsG89N89J3tWOWMSzXkaUHk4M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c19zcXVhcmVfd182/NDAscV81MC9sc2Np/L2RiL1BJQ1RVUkVT/L0NNUy8zMjA0MDAv/MzIwNDQ4LnBuZw"
      alt=""
    />
  );
  const players = ["Babar", "Shaheen", "Rizwan"];

  return (
    <div className="App">
      <Header title="Welcome to Stats Star" />
      <div className="content">
        <Main title="List Of Players" names={players} />
        <Sidebar
          title="Player's Stats:"
          name="Babar Azam"
          image={image}
          matches="20"
          average={40}
          runs={1000}
          age={29}
        />
      </div>
    </div>
  );
}
