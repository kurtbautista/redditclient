import React from 'react'
import { Segment, Dimmer, Image, Loader } from 'semantic-ui-react'

const Loading = () => {
  return (
    <div>
      <Segment>
        <Dimmer active inverted>
          <Loader inverted content='Loading' />
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>
    </div>
  )
}

export default Loading