// const heading = document.createElement("h1");
// heading.innerHTML = "Hello !";

// const root = document.getElementById("root");
// root.appendChild(heading);

const heading = React.createElement("h1", { id: "heading", className: "heyClass" }, "Hello React CDN !!!");
const heading2 = React.createElement("h2", { id: "heading2", className: "hey2" }, "Heading 2");
const container = React.createElement("div", { id: "container", className: "heyContiner" }, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);