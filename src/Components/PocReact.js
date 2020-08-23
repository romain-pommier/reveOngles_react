import React, { Component } from 'react';

class PocReact extends Component {
    // constructor(props) {
    //     super(props)

    // }
    state = {
        clients: [
            { id: 1, name: "romain" },
            { id: 2, name: "client2" },
            { id: 3, name: "client3" },
        ],
        compteur: 0,
        newClient: ''
    }

    handleDelete = (id) => {
        console.log(id)
        const clients = this.state.clients.slice()
        const index = clients.findIndex((client) => {
            return client.id === id
        })
        clients.splice(index, 1)
        this.setState({ clients: clients })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        const id = new Date().getTime()
        const name = this.state.newClient
        //copie TOUTES les éléments de this.statre.client
        // équiveau a const clients = this.state.clients.slice()
        const clients = [...this.state.clients]
        clients.push({ id, name })
        this.setState({ clients: clients, newClient: '' })

    }
    handleChange = (event) => {
        const value = event.currentTarget.value
        console.log(value)
        this.setState({ newClient: value })
    }

    handleClick = () => {
        const clients = this.state.clients.slice()
        clients.push({ id: 5, name: "robert" })
        this.setState({ clients: clients })
    }


    title = "Liste des clients"
    render() {
        return (

            <div>
                <h1 class="test"> {this.title} </h1>
                <button onClick={this.handleClick}>Cliquez ici</button>
                <ul>
                    {this.state.clients.map(client => (
                        <li key={client.id} >{client.name} <button onClick={() => this.handleDelete(client.id)}>X</button> </li>
                    ))}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.newClient} onChange={this.handleChange} type="text" placeholder="Ajouter un client"></input>
                    <button >Confirmer</button>
                </form>

            </div >
        );
    }
}


export default PocReact;
