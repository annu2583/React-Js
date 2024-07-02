import React from 'react'

function footer() {
  const list = ["Home", 'News', 'About', 'Contact us', 'Our Team']
  return (
    <div className='footer'>
      <div className='footer_icons'>
        <img src='./fb.png' />
        <img src='./ig.png' />
        <img src='./twitter.png' />
        <img src='./youtube.png' />
        <img src='./google.png' />
      </div>
    
        <ul className='footer_items'>
          {list?.map((item , index)=>{
            return(
              <li key={index}>{item}</li>
            )
          })}
        </ul>
    </div>
  )
}

export default footer