import React, { useState } from 'react';


const SideList = () => {

  const [SideItems, setSideItems] = useState([
    { key: 1, title: 'Assign Roles and Privilages' },
    { key: 2, title: 'Review Job Posts' },
    { key: 3, title: 'Resolve Complains' },
    { key: 4, title: 'Control Privilages' },
    { key: 5, title: 'Control Privilages' },
  ]);
  

  return (
    <div className="SideList" >
      { SideItems.map(item => {
        return (
          <div key={item.key} className="sideTile">
            <span>{ item.title }</span>
          </div>
        )
      }) }
    </div>
  )
}

export default SideList
