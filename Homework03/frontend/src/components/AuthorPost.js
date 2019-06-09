import React from 'react'

import { Card, CardHeader, CardBody } from 'reactstrap'
import Post from './Post'

const AuthorPost = ({
  className,
  data: {
    id,
    name,
    posts,
  }
}) => {
  const posts_dom = posts.map((elem) => {
    return <Post key={elem.id} data={elem} />;
  });
  return (
    <Card className={className}>
      <CardHeader>{name}</CardHeader>
      <CardBody>
        {posts_dom}
      </CardBody>
    </Card>
  )
}

export default AuthorPost
