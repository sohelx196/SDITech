import React from 'react'
import ComingSoon from './main_component/ComingSoon'
import comingSoon from '../assets/logos/comingSoon.png'

function LostAndFound() {
  return (
    <div>
          <ComingSoon
            ComingSoonImg={comingSoon}
            text1 = "Lost & Found Coming"
            text2 = "Soon!"
          />
          <p className='text-gray-400 text-center text-xl'>Every lost item carries someone’s story, a memory, a need, or a daily essential. By returning it, you’re not just giving back an object, you’re restoring someone’s smile.</p>
    </div>
  )
}

export default LostAndFound