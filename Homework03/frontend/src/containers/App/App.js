import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

import {
  CREATE_POST_MUTATION,
  AUTHORS_QUERY,
  AUTHORS_SUBSCRIPTION,
} from '../../graphql'
import AuthorPost from '../../components/AuthorPost'
import classes from './App.module.css'

let unsubscribe = null

class App extends Component {
  state = {
    formTitle: '',
    formBody: '',
    formAuthor: '',
    likePost: ''
  }

  handleFormSubmit = e => {
    e.preventDefault()

    const { formTitle, formBody, formAuthor } = this.state

    if (!formTitle || !formBody || !formAuthor) return

    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        authorId: formAuthor
      }
    })

    this.setState({
      formTitle: '',
      formBody: '',
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Modern GraphQL Tutorial</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className={classes.form}>
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost

                return (
                  <Form onSubmit={this.handleFormSubmit}>
                    <FormGroup row>
                      <Label for="author" sm={2}>
                        Author
                      </Label>
                      <Col sm={10}>
                        <Query query={AUTHORS_QUERY}
                          onCompleted={data => {
                            this.setState(prev => ({formAuthor: prev.formAuthor === '' ? data.users[0].id: prev.formAuthor}));
                          }}>
                          {({ loading, error, data, subscribeToMore }) => {
                            if (loading) return <p>Loading...</p>
                              if (error) return <p>Error :(((</p>
                              const posts = data.users.map((elem, id) => (
                                <option value={elem.id} key={elem.id}>{elem.name}</option>
                              ))
                            return <Input type="select" name="author" id="author"
                              onChange={e => this.setState({formAuthor: e.target.value})}>
                              {posts}
                            </Input>
                          }}
                        </Query>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                        Title
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="title"
                          value={this.state.formTitle}
                          id="title"
                          placeholder="Post title..."
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                      />
                    </FormGroup>
                    <Button type="submit" color="primary">
                      Post!
                    </Button>
                  </Form>
                )
              }}
            </Mutation>
          </Col>
          <Col xs="6">
            <Query query={AUTHORS_QUERY}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(((</p>

                const posts = data.users.map((post, id) => (
                  <AuthorPost data={post} key={id} className={classes.post} />
                ))
                if (!unsubscribe)
                  unsubscribe = subscribeToMore({
                    document: AUTHORS_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                      if (!subscriptionData.data) return prev
                      const newPost = subscriptionData.data.user.data

                      return {
                        ...prev,
                        posts: [newPost, ...prev.users]
                      }
                    }
                  })

                return <div>{posts}</div>
              }}
            </Query>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
