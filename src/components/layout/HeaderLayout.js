import React from 'react'
import { Menu, Icon, Container, Header } from 'semantic-ui-react'

export default function HeaderLayout() {
  return (
    <Header className='header-wrapper'>
        <Container className='header-container'>
          <h1><Icon name="reddit" /> Hot Posts </h1>
      </Container>
    </Header>
  )
}
