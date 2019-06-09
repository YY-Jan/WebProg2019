import React, { Component } from 'react'

import { Card, CardHeader, CardBody, Collapse } from 'reactstrap'
import Post from './Post'

class AuthorPost extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  render() {
    const { className,
      data: {
        id,
        name,
        posts,
      }} = this.props;
    const posts_dom = posts.map((elem) => {
      return <Post key={elem.id} data={elem} />;
    });
    return (
      <Card className={className}>
        <CardHeader style={{cursor: 'pointer'}}
          onClick={e => this.setState(prev => ({open: !prev.open}))}>{name} ({posts.length})</CardHeader>
        <Collapse isOpen={this.state.open}>
          <CardBody>
            {posts_dom}
          </CardBody>
        </Collapse>
      </Card>
    )
  }
}

export default AuthorPost
