import React, { useState } from "react";
import Nav from "../Nav";
import About from "../../Pages/About";
import Portfolio from "../../Pages/Portfolio";
import Contact from "../../Pages/Contact";
import Resume from "../../Pages/Resume";
import Footer from "../../Margin/Footer";
import Image from "../../../assets/img/headshot.jpg";

const Header = () => {
  const [currentPage, handlePageChange] = useState("About/");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <div className="main-container">
      <div>
        <header>
          <img className='hs' src={Image} alt="profile" />
          <h2>Nick Clymer</h2>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
      </div>
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Header;
