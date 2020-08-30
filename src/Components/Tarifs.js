import React, { Component } from 'react';
import Accordion from './Accordion'
import ServiceMain from '../Contents/ServiceMain'
import ServicePied from '../Contents/ServicePied'
import ServiceBeaute from '../Contents/ServiceBeaute'


class Tarifs extends Component {
    data = [
        { id: 1, name: "Tarifs Mains", content: () => <ServiceMain />, state: "active" },
        { id: 2, name: "Tarifs Pieds", content: () => <ServicePied />, state: "inactive" },
        { id: 3, name: "Beauté Main & Pieds", content: () => <ServiceBeaute />, state: "inactive", },
    ]
    render() {
        return (

            <div id="tarifs" className="accordion_div" >
                <h3 className="m-5 text-center">Tarifs</h3>
                <Accordion data={this.data} >

                </Accordion>

            </div>

        )
    }
}
export default Tarifs;


