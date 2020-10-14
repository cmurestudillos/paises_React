import React, {Component} from 'react';

class HomeComponent extends Component{
    //----------------------------------------------------------------------//
    // Metodo render                                                        //
    //----------------------------------------------------------------------//
    render(){
        // Log de seguimiento
        console.log('HomeComponent.js - Metodo render()');

        return(
            <div className="container">
                <h3 className="m-3">Paises</h3>
                <hr></hr>
            </div>
        )
        
    }

}

export default HomeComponent;