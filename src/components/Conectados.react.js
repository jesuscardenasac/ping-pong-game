import React, { Component } from 'react';

class Conectados extends Component {
    constructor(args) {
        super();
    }

    render() {
        return (
            <div className="container">
                  <h1>Conectados</h1>
                  <div>
                  	<table className="table table-hover">
                    	<thead>
                        	<tr>
                              <th>Nombres</th>
                              <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                        	<tr>
                            	<td>Jesus A. Cardenas</td>
                                <td><button type="button" className="btn btn-danger btn-block">Invitar</button></td>
                            </tr>
                            <tr>
                            	<td>Jesus A. Cardenas</td>
                                <td><button type="button" className="btn btn-danger btn-block">Invitar</button></td>
                            </tr>
                            <tr>
                            	<td>Jesus A. Cardenas</td>
                                <td><button type="button" className="btn btn-danger btn-block">Invitar</button></td>
                            </tr>
                            <tr>
                            	<td>Jesus A. Cardenas</td>
                                <td><button type="button" className="btn btn-danger btn-block">Invitar</button></td>
                            </tr>
                            <tr>
                            	<td>Jesus A. Cardenas</td>
                                <td><button type="button" className="btn btn-danger btn-block">Invitar</button></td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
        );
    }
}

export default Conectados;