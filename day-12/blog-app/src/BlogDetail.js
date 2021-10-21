import axios from 'axios'
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class BlogDetail extends Component {
    state = {
        article: null
    }

    componentDidMount() {
        this.loadPost()
    }

    loadPost = () => {
        axios.get(`http://localhost:1337/articles?id=${this.props.match.params.blogid}`)
            .then((res) => {
                if (res.data.length === 1) {
                    this.setState({ article: res.data[0] })
                }
            })
    }

    render() {
        const { article } = this.state;
        if (!article)
            return null;
        return (
            <Card style={{ marginBottom: 20 }} key={article.id}>
                <Card.Header as="h5" >
                    <Button onClick={() => {
                        this.props.history.goBack()
                    }} >Go Back</Button>
                    {" "}
                    <span>{article.title}</span>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{article.category.name}</Card.Title>
                    <Card.Text>
                        {article.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default withRouter(BlogDetail)
// Higher Order Component
