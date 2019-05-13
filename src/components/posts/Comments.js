import React, { Component } from 'react'
import { Comment, Header } from 'semantic-ui-react'
import CommentLayout from './CommentLayout'

class Comments extends Component {

    state = {
        page : 0,
        itemPerPage : 10,
        comments : []
    }
    
    getAllComments() {
        this.setState({
            comments : this.props.commentList
        })
    }

    componentDidMount(){
        this.getAllComments()
    }    

  render() {
    // console.log(this.state, this.props.commentList)

    const { comments } = this.state
    const sortComments = comments && 
    comments.splice(0, 10).map( (comment, key) => (
        <CommentLayout key={key} commentDetails={comment} />
    ))

    return (
        <div className="comments-container">
          <Comment.Group>
            <Header as='h3' dividing>
            Comments
            </Header>

            {sortComments}

            </Comment.Group>
        </div>
    )
  }
}

export default Comments