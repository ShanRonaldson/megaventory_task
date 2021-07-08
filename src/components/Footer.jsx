import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        Created by Shannon Schrauwen for Megaventory Internship task. <br />
        Tech stack: React (using create-react-app).
        <FontAwesomeIcon icon={["fab", "react"]} className="footer--icons" />
      </div>

      <div className="footer__imgs">
        <a href="https://github.com/ShanSchrauwen" className="footer__link">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a
          href="https://stackoverflow.com/users/13308896/shanschrauwen"
          className="footer__link"
        >
          <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
        </a>
        <a
          href="https://www.linkedin.com/in/shannon-schrauwen-562b98bb/"
          className="footer__link"
        >
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </a>
        <a href="https://shanschrauwen.com/" className="footer__link">
          <img
            src="./images/shannon_schrauwen_website.png"
            alt="Shannon Schrauwen portfolio site logo"
            className="footer--img"
          />
        </a>
      </div>
    </footer>
  );
}

export { Footer };
