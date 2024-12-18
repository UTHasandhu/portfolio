import "./ActionCard.css";

function ActionCard({ imgSrc, title, text, listItems, links }) {
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
          <a href={link.href} className="card-link" key={index}>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ActionCard;
