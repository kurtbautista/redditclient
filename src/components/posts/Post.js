import React, { Component } from 'react'
import { r } from '../../services/authConfig'
import { Container, Header, Breadcrumb } from 'semantic-ui-react'
import Loading from '../layout/Loading'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import Comments from './Comments'

class Post extends Component {

  state = {
    id : this.props.match.params.id,
    title : '',
    content: '',
    images : '',
    comments: [],
    loading: true,
    loadingComment: true
  }

  getSinglePost() {
    const postID = this.state.id
    const submission = r.getSubmission(postID)
    submission.title.then( title => this.setState({...this.state, title }))
    submission.selftext.then( content => this.setState({...this.state, content, loading: false}))
    submission.preview.then( preview => preview.enabled && this.setState({ ...this.state, images : preview.images[0] }) )
    submission.comments.then( comments => this.setState({ ...this.state, loadingComment: false, comments }))
  }

  componentDidMount(){
    this.getSinglePost() 
  }

  render(){
    // console.log(this.state)
    const { title, content, loading, images, comments, loadingComment } = this.state
    const getImage = images && ReactHtmlParser(`<img src=${images.resolutions[2].url} class="float-left" />`)
    return (
      <Container className="post-container">
        { loading ? (<Loading />) : 
        (
          <div>
            <Breadcrumb>
              <Breadcrumb.Section as={Link} link to='/' >Hot Post</Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
            </Breadcrumb>
            <Header as='h1'>{title}</Header>
            {getImage}
            <p>{content}</p>
            <br />
            <div className="clearfix"></div>
          </div>
        )
        } 
        { !loadingComment && ( <Comments commentList={comments}/> ) }
      </Container>
    )
  }
}

export default Post