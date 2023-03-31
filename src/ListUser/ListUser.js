
import React, { Component } from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './ListUser.css'

export default class ListUser extends Component {

    render() {
        return (
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={this.props.url} />
                <Card.Body>
                    <Card.Title>{this.props.id}</Card.Title>
                    <Card.Text>
                        {this.props.title}
                    </Card.Text>
                    <Button variant="primary">see User</Button>
                </Card.Body>
            </Card>
        )
    }
}

