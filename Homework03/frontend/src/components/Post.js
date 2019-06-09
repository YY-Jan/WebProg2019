import React, { Component } from 'react'

import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

class Post extends Component{
  constructor(props) {
    super(props);
    this.state = { like: false };
  }
  render() {
    const {
      className,
      data: {
        title,
        body,
      }
    } = this.props;
    return (
      <Card className={className}>
        <CardHeader>{title}</CardHeader>
        <CardBody>
          {body || <p style={{ opacity: 0.5 }}>No body for this post...</p>}
        </CardBody>
        <CardFooter>
          <FontAwesomeIcon icon={this.state.like? fasHeart: farHeart}
            style={{cursor: 'pointer'}}
            onClick={e => this.setState(prev => ({like: !prev.like}))} />
        </CardFooter>
      </Card>
    )
  }
}

export default Post
