import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

//components//
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";

//pages//
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import AddNews from "./components/AddNews/AddNews";
import Login from "./components/Login/Login";
import NewsItem from "./components/NewsItem/NewsItem";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/News" element={<News />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/AddNews" element={<AddNews />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/NewsItem/:id" element={<NewsItem />} />
            </Routes>
          </Layout>
          <Footer />
        </>
      </div>
    </div>
  );
}

export default App;
