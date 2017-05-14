import React, { Component } from 'react';

class NotFound extends Component {
    constructor(args) {
        super();
    }

    render() {
        return (
            <div className={'login-page'}>
              <div className={'form'}>
                <h1>Esta ruta no existe</h1>
              </div>
            </div>
        );
    }
}

export default NotFound;