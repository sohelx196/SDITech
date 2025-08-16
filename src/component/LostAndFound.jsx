import React from 'react'
import ComingSoon from './main_component/ComingSoon'
import comingSoon from '../assets/logos/comingSoon.png'

function LostAndFound() {
  return (
    <div>
          <ComingSoon
            ComingSoonImg={comingSoon}
            text1 = "Coming"
            text2 = "Soon!"
          />
    </div>
  )
}

export default LostAndFound