import React from "react";

class Componente3 extends React.Component{

    state = { 
        nome : ''
    }

    modificarNome = (event) => {
       this.setState({
           nome : event.target.value
       })
    }

    render(){
        return(
            <>
              <input type="text" value={this.state.nome} onChange={this.modificarNome} />
              <h1>Hello {this.state.nome}</h1>
            </>
        )
    }
}

export default Componente3;