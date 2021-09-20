import "./App.css";
import "./SCSS/Global.scss"
import "./SCSS/Responsive.scss"
import { ThemeProvider } from "./context/ThemeContext";
import MainRouter from "./Components/MainRouter";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <MainRouter/>
      </ThemeProvider>
    </div>
  );
}

export default App;
