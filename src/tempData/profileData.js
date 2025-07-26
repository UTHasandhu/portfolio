// src/data.js
const cardData = [
  {
    imgSrc: require("../Media/Sandhu_Harman.jpg"),
    title: "Harman Sandhu",
    links: [
      {
        href: "https://www.linkedin.com/in/asdasfharmansandhu03/",
        content: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        ),
      },
      {
        href: "https://github.com/UTHasandhu/portfolio",
        content: (
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            width="32"
            height="32"
          />
        ),
      },
      {
        href: "mailto:hasandhu@utexas.edu",
        content: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-.5a.5.5 0 0 0-.5.5v.217l6 3.6 6-3.6V4a.5.5 0 0 0-.5-.5H2zm13 1.383L8.617 8.18a.5.5 0 0 1-.634 0L1 4.883V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4.883z" />
          </svg>
        ),
      },
      {
        href: "https://g.co/kgs/5n6gbyk",
        content: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path d="M8.354 1.146a1 1 0 0 0-1.708 0l-6 7A1 1 0 0 0 1 9h1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h1a1 1 0 0 0 .354-1.854l-6-7zM2 9.5V15h3v-5.5a1 1 0 0 1 2 0V15h3V9.5a1 1 0 0 1 .854-.986L8 2.5 2.146 8.514A1 1 0 0 1 2 9.5z" />
          </svg>
        ),
      }
    ],
  },
  {
    imgSrc: require("../Media/Sandhu_Harman.jpg"),
    title: "Another Person",
    text: "Another example text for the card.",
    listItems: ["First", "Second", "Third"],
    links: [
      { href: "#", text: "Profile link" },
      { href: "#", text: "Contact link" },
    ],
  },
];

export default cardData;
