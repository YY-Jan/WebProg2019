import React from 'react'

import { Card, CardHeader, CardBody } from 'reactstrap'

const Post = ({
  className,
  data: {
    title,
    body,
  }
}) => {
  return (
    <Card className={className}>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        {body || <p style={{ opacity: 0.5 }}>No body for this post...</p>}
      </CardBody>
    </Card>
  )
}

export default Post
