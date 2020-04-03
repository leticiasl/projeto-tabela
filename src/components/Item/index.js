import React, { Component } from 'react';
import axios from 'axios'

class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            idUsuario: props.idUsuario,
            item: props.item,
            qtd: 0
        }
    }

    componentDidMount = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.idUsuario}/${this.state.item}`)
            .then(res => {
               this.setState({qtd: res.data.length})
            });
    }

    render() {
        return (
            <>
                <td>{this.state.qtd}</td>
            </>
        );
    }
}
export default Item;
