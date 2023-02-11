import React from 'react'
import './SideBarRow.css'
export default function SideBarRow({Icon,title}) {
  return (
    <div id='SideBarRow'>

      <Icon id= 'SideBarRowIcon'/>
      <h2 id='SideBarRowTitle'>{title}</h2>
    </div>
  )
}
