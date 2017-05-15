import React, { Component } from 'react';
import axios from 'axios';

class MisJuegos extends Component {
    constructor(args) {
        super();
        this.componentDidMount  = this.componentDidMount.bind(this);
        this.state = {juegos: []};
    }
    
    componentDidMount  () {
        
        var self = this;
        
        axios.get('http://ping-pong-game-backend-jesuscardenas.c9users.io/juego/4')
          .then(function (response) {
              self.setState({juegos: response.data});
            console.log(self.state.juegos);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }

    render() {
        return (
            <div className="container">
              <h1>Mis Juegos</h1>
              <div>
              	<table className="table table-hover">
                	<thead>
                    	<tr>
                          <th>Oponente</th>
                          <th>Puntos Oponente</th>
                          <th>partidas ganadas</th>
                          <th>partidas perdidas</th>
                          <th>mis puntos</th>
                        </tr>
                    </thead>
                    <tbody>
                    	{this.state.juegos.map((juego, key) => (
                        
                            <tr>
                            	<td>{juego.nom_oponente}</td>
                                <td>{juego.puntos_oponente}</td>
                                <td>{juego.mis_ganadas}</td>
                                <td>{21-juego.mis_ganadas}</td>
                                <td>{juego.mis_puntos}</td>
                            </tr>
                        
                        ))}
                    </tbody>
                </table>
              </div>
            </div>
        );
    }
}

export default MisJuegos;