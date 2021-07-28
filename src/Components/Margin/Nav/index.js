import React from "react";

const Nav = (props) => {
  const pages = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <ul className="nav nav-pages">
      {pages.map((page) => (
        <li className="nav-item" key={page}>
          <a
            href={"#" + page.toLowerCase()}
            onClick={() => props.handlePageChange(page)}
            className={
              props.currentPage === page ? "nav-link active" : "nav-link"
            }
          >
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
