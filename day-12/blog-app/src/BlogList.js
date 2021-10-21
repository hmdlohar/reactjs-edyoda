import { Card } from 'react-bootstrap';
import axios from 'axios'
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BlogList extends Component {
    state = {
        articals: []
    }

    componentDidMount() {
        this.loadArticals()
    }

    loadArticals = () => {
        axios("http://localhost:1337/articles")
            .then((response) => {
                this.setState({ articals: response.data })
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    render() {
        return (
            <div>
                {this.state.articals.map((artical) => {
                    return (
                        <Card style={{ marginBottom: 20 }} key={artical.id}>
                            <Card.Header as="h5" >
                                <Link to={`/blog/${artical.id}`}>
                                    {artical.title}
                                </Link>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{artical.category.name}</Card.Title>
                                <Card.Text>
                                    {artical.content.substr(0, 100)}...
                                </Card.Text>
                            </Card.Body>
                        </Card>)
                })}

            </div>
        )
    }
}

