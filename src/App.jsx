import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Related from "./components/Related";

const App = () => (
  <>
    <div className="max-w-[1140px] mx-auto px-4 py-7 font-Inter">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <Main />
        <Aside />
        <Related />
      </div>
    </div>
  </>
);
export default App;
