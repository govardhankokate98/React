const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello word by react!")
const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child" },
            [
                React.createElement("h1", { id: "head1" }, "Hello word by react!"),
                React.createElement("h2", { id: "head2" }, "Hello word by react!")
            ]),
        React.createElement("div", { id: "child2" },
            [
                React.createElement("h1", { id: "head1" }, "Hello word by react!"),
                React.createElement("h2", { id: "head2" }, "Hello word by react!")
            ])
    ])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)