import React, {Component} from 'react';
// Peticiones Http
import axios from 'axios';
// EndPoint
import url from '../../api/endpoint';
// Componentes Bootstrap React
import {Accordion, Card} from 'react-bootstrap';

class HomeComponent extends Component{
    // Variables
    api = url.endpoint;
    state = {
        paises: []
    }    
    //----------------------------------------------------------------------//
    // Antes de renderizar, cargar el metodo                                //
    //----------------------------------------------------------------------//
    componentDidMount (){  
        // Log de seguimiento
        console.log("HomeComponent.js - Metodo componentWillMount");  

        this.getPaises();
    }
    //----------------------------------------------------------------------//
    // Metodo getPaises para obtener todos los paises                       //
    //----------------------------------------------------------------------//
    getPaises = () => {
        // Log de seguimiento
        console.log("HomeComponent.js - Metodo getPaises");

        axios.get(this.api)
        .then(res => {
            if(res.data){
                this.setState({
                    paises: res.data
                });
                //console.log(this.state.paises);
            }
        });
    };      
    //----------------------------------------------------------------------//
    // Metodo render                                                        //
    //----------------------------------------------------------------------//
    render(){
        // Log de seguimiento
        console.log('HomeComponent.js - Metodo render()');

        var listarPaises = this.state.paises.map( (pais, index) => {
            return(
                <Accordion defaultActiveKey="0" key={index + 1}>
                    <Card.Header className="mb-0">
                        <Accordion.Toggle className="btn btn-4 cloudy-knoxville-gradient w-50" eventKey={index + 1}>{pais.name}</Accordion.Toggle>
                        <img src={pais.flag} className="float-right rounded-circle shadow border" title={pais.name} alt={pais.name} width="55" height="55"></img>
                    </Card.Header>
                    <hr></hr>
                    <Accordion.Collapse eventKey={index + 1}>
                        <Card.Body>
                            <div className="row">
                                <div className="col">
                                    <strong>Capital: </strong><span className="badge badge-pill badge-success"><i className="fas fa-city" aria-hidden="true"></i>  {pais.capital}</span>
                                </div>
                                <div className="col">
                                    <strong>Poblacion: </strong><span className="badge badge-pill badge-primary"><i className="fas fa-users" aria-hidden="true"></i> {pais.population}</span>
                                </div>
                                <div className="col">
                                    <strong>Subregion: </strong><span className="badge badge-pill badge-warning"><i className="fas fa-map-marker-alt" aria-hidden="true"></i>  {pais.subregion}</span>
                                </div>
                            </div>                                
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>                
            );
        });

        return(
            <div className="container mt-4 mb-4">
                {listarPaises}
            </div>
        );
    }
}

export default HomeComponent;