import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'
import { formatDate } from '../../services/utils'

class CommentLayout extends Component {

  state = {
    shareUrl : ''
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name] : value 
    })
  }

  onClickShare = (event) => {
    const shareUrl = "#shareUrl-" + event.target.id
    var copyText = document.querySelector(shareUrl);
    copyText.select();
    document.execCommand("copy");
  }

  render(){
    const avatar = ['matt','elliot','jenny','joe']
    const rand = Math.floor(Math.random() * 3)
    const getAvatar = `https://react.semantic-ui.com/images/avatar/small/${avatar[rand]}.jpg`
  
    const { body, author, created, replies, id, permalink } = this.props.commentDetails
    const utcDate = new Date(created * 1000)
    const getDate = formatDate(utcDate)
    const getPermalink = `https://www.reddit.com/${permalink}`
  
    // console.log(this.props.commentDetails)
    return (
      <div>
        <Comment>
          <Comment.Avatar src={getAvatar} />
          <Comment.Content>
              <Comment.Author as='a'>{ author.name }</Comment.Author>
              <Comment.Metadata>
              <div>{getDate}</div>
              </Comment.Metadata>
              <Comment.Text>{ body }</Comment.Text>
              <Comment.Actions>
              <Comment.Action id={id} onClick={this.onClickShare}>Copy link to Share </Comment.Action>
                <span className="share-url">
                <input type="text" id={'shareUrl-' + id} name={'shareUrl-' + id} value={getPermalink} onChange={this.handleChange} />
                </span>
              </Comment.Actions>
          </Comment.Content>
        </Comment>
      </div>
    )
  }
}

export default CommentLayout

