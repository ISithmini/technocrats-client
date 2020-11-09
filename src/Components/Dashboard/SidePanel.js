import React, { useState } from 'react'
import SideList from './SideList';
import './style/SidePanel.scss';

const SidePanel = () => {

  const [showClicked, setShowClicked] = useState(false);



  return (
    <div className={ showClicked? 'sidePanel sidePanelhide': 'sidePanel sidePanelshow'}>
      <button className="btn Collapse-btn" onClick={() => {setShowClicked(!showClicked)}}>☰</button>
      <SideList/>
    </div>
  )
}

export default SidePanel
