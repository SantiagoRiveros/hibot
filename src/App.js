import {useEffect} from 'react'
import { Benefits, Footer, Hero, Navbar } from "./Molecules";
import "./App.css";

function App() {
  useEffect(() => {
    const js = document.createElement("script");
    js.type = "text/javascript";
    js.async = true;
    js.src = "https://go.botmaker.com/rest/webchat/p/54WLNAOURJ/init.js";
    document.body.appendChild(js);

    return () => {
      document.body.removeChild(js);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Footer />
    </>
  );
}

export default App;
