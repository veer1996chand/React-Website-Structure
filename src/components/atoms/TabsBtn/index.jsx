// import React from 'react';

// import "./TabsBtn.css"
 
// const TabsBtn = (props) => { 
//   var name = props.name;
  
//   console.log("Btn", name);
  
//   return (
    
//         <a  
//           className={name.btnIs}
//           id={name.btnIs}
//           data-toggle={name.dataToggle}
//           href={name.href}
//           role={name.role}
//           aria-controls={name.riaControls} 
//           aria-selected={name.ariaSelected} 
//           >{name.btnName}</a>
    
//   );
// }

import React from "react"
import PropTypes from "prop-types"

const TabsBtn = (props) => {
  return <button {...props} />
}

TabsBtn.defaultProps = {
  id: "TabsBtn1",
  type:"button",
  name: "TabsBtn1", 
  value: "TabsBtn1"
}

 

export default TabsBtn
 