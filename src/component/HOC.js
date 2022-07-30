import React from 'react';

const LandingPage = (props) =>{
    return(
       <div style={{border:"2px solid black",backgroundColor:"pink"}}>
          <props.component/>
       </div>
    )
}
export default LandingPage;