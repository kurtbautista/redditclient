import React from 'react'
import { Item, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

const PostItem = (props) => {
  console.log(props.postDetails)

  const { thumbnail, title, id, author, selftext } = props.postDetails

  const placeholder = 'https://react.semantic-ui.com/images/wireframe/image.png'
  const thumb = ['self','default']
  return (
    <Item.Group>
      <Item>
        <Item.Image size='tiny' src={ thumb.includes(thumbnail) ? placeholder : thumbnail } />

        <Item.Content>
          <Item.Header as={Link} to={'/hot/' + id}>{title}</Item.Header>
          <Item.Description>
            {ReactHtmlParser(selftext)}
          </Item.Description>
          <Item.Extra>Posted by {author.name}</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default PostItem