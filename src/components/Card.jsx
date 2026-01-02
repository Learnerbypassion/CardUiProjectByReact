import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  return (
     <div className="Cards">
        <div id="topPart">
          <img src={props.logo} alt="" id="logo" />
          <button id="save">Save <Bookmark size={15} strokeWidth={1}/></button>
        </div>
        <div className='middle'>
          <h5>{props.name} <span id='time'>{props.time}</span></h5>
          <h3>{props.post}</h3>
          <div className="deatils">
            <p>{props.tag1}</p>
            <p>{props.tag2}</p>
          </div>
          
        </div>
        <div className="bottom">
            <h4 id="price">{props.pay}</h4>
            <button id="apply">Apply Now</button>
          </div>
    </div>
  )
}

export default card