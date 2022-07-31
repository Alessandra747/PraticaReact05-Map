import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    amigos: [
      {
        nome: "Mara",
        idade: 26
      },
      {
        nome: "Jorge",
        idade: 26
      },
      {
        nome: "Erik",
        idade: 26
      },
      {
        nome: "Anna Julia",
        idade: 6
      },
      {
        nome: "Matheus",
        idade: 26
      },
      {
        nome: "Renan",
        idade: 28
      }
    ]
  };

  render() {
    return (
      <>
        {this.state.amigos.map((item) => (
          <div className="lista">
            <h1>{item.nome}</h1>
            <h1>{item.idade}</h1>
          </div>
        ))}
      </>
    );
  }
}

export default App;
