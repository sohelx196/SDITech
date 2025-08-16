import React from 'react'
import ComingSoon from './main_component/ComingSoon'
import comingSoon from '../assets/logos/comingSoon.png'

function Events() {
  return (
    <div>
          <ComingSoon
            ComingSoonImg={comingSoon}
            text1 = "Events"
            text2 = "Coming Soon!"
          />
    </div>
  )
}

export default Events