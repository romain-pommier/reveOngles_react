import React, { Component } from 'react';
import Accordion from './Accordion'
import Services from './Services'

class Tarifs extends Component {
    data = [
        { id: 1, name: "About Us", content: () => <Services />, state: "active" },
        { id: 2, name: "Service", content: () => <Services />, state: "inactive" },
        { id: 3, name: "Contact Us", content: () => <Services />, state: "inactive", },
    ]
    render() {
        return (
            <Accordion data={this.data} >

            </Accordion>

        )
    }
}
export default Tarifs;


