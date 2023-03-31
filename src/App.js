import React, { Component } from 'react'
import ListUser from './ListUser/ListUser'
import { Card, Button, Row, Container } from 'react-bootstrap';




export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            AlbumsData: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((response) => response.json())
            .then((json) => this.setState({ AlbumsData: json }))
    }


    render() {
        return (
            <Container>
                <Row>
                    {this.state.AlbumsData.map(album => (
                        < ListUser {...album} />
                    ))}
                </Row>
            </Container>
        )
    }
}
