import About from "./component/About";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Services from "./component/Services";
import Work from "./component/Work";

function App() {

  return (
    <div className="app-div overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
}

export default App
