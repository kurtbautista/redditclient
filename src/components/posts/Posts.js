import React, { Component } from 'react'
import { r } from '../../services/authConfig'
import PostItem from './PostItem'
import { Container } from 'semantic-ui-react'
import Loading from '../layout/Loading'

class Posts extends Component {

  state = {
    posts: [],
    loading: true
  }

  getHotPost() {
    r.getHot().then(posts =>  this.setState({
      posts: posts,
      loading: false
    }))
  }

  componentDidMount(){
    this.getHotPost()
  }

  render() {
    const { posts, loading } = this.state
    const getPostList = posts.map( (post,index)=> <PostItem key={index} postDetails={post} /> )

    return (
      <Container>
        { loading && (<Loading />)} 
        { getPostList }
      </Container>
    )
  }
}


export default Posts