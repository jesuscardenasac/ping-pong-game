import React, { Component } from 'react';
import axios from 'axios';

class CuadroHonor extends Component {
    
    constructor(args) {
        super();
        this.componentDidMount  = this.componentDidMount.bind(this);
        this.state = {honor: []};
    }
    
    
    componentDidMount  () {
        
        var self = this;
        
        axios.get('http://phptest-jesuscardenas.c9users.io/juego')
          .then(function (response) {
              self.setState({honor: response.data});
            console.log(self.state.honor);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }

    render() {
        return (
            <div className="container">
              <h1>Cuadro de Honor</h1>
              <div>
              	<table className="table table-hover">
                	<thead>
                    	<tr>
                          <th>Posicion</th>
                          <th>Jugador</th>
                          <th>Ganados</th>
                          <th>Perdidos</th>
                          <th>Puntaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.honor.map((hon, key) => (
                        
                            <tr>
                            	<td>{key+1}</td>
                                <td>{hon.nombre}</td>
                                <td>{hon.ganados}</td>
                                <td>{21-hon.ganados}</td>
                                <td>{hon.puntos}</td>
                            </tr>
                        
                        ))}
                    </tbody>
                </table>
              </div>
            </div>
        );
    }
}

export default CuadroHonor;