import React from "react";
import "./ActionCard.css";

function ActionCard({ imgSrc, title, text, listItems, links }) {
  // Helper function to extract domain name
    const extractDomain = (url) => {
        let domain;
        //find & remove protocol (http, ftp, etc.) and get domain
        if (url.indexOf("://") > -1) {
        domain = url.split("/")[2];
        } else {
        domain = url.split("/")[0];
        }
    
        //find & remove port number
        domain = domain.split(":")[0];
        return domain;
    };  

  return (
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title --bs-primary">{title}</h5>
        <p className="card-text --bs-primary">{text}</p>
      </div>
      <ul className="list-group list-group-flush">
        {listItems.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className="card-body">
        {links.map((link, index) => (
          <a href={link.href} className="card-link" key={index} target="_blank" rel="noopener noreferrer">
            {link.content || link.text || extractDomain(link.href)}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ActionCard;
