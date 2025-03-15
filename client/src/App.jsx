import "./app.css";
import Gallery from "./components/gallery/gallery";
import NavBar from "./components/navBar/navBar";
import SideBar from "./components/sideBar/sideBar";

const App = () => {
  return (
    <div className="app">
      <SideBar />
      <div className="content">
        <NavBar />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
