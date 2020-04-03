import React, { Component } from 'react';
import axios from 'axios'
import Item from '../Item'


class Tabela extends Component {
  state = {
    usuarios: []
  }

  componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/`)
      .then(res => {
        this.setState({ usuarios: res.data });
      });

  }

  getAlbumLegth = (id) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
      .then(res => {
        console.log(res.data.length)
        return res.data.length
      });
  }

  render() {
    const usuarios = this.state.usuarios
    return (
      <>
        {console.log(usuarios)}

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Telefone</th>
              <th scope="col">Albuns</th>
              <th scope="col">Posts</th>
              <th scope="col">Photos</th>
            </tr>
          </thead>
          <tbody>

            {usuarios !== undefined && (
              usuarios.map((usuario) => (
                <>
                  <tr key={usuario.id}>
                    <td>{usuario.name}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.phone}</td>
                    <Item key={usuario.key} idUsuario={usuario.id} item="albums" />
                    <Item key={usuario.key} idUsuario={usuario.id} item="posts" />
                    <Item key={usuario.key} idUsuario={usuario.id} item="photos" />
                  </tr>

                </>
              ))
            )}

          </tbody>
        </table>

      </>
    );
  }
}
export default Tabela;
