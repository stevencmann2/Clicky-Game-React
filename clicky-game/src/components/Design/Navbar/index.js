import React from 'react';

const Navbar = ({
    score, 
    topScore,
    textResult, 
    color
}) => {

return(

<div className="row"> 
<nav className="navbar navbar-expand-sm text-center text-light fixed-top py-3 mb-2" style={styles.navigation}>
 
    <div className="col text-center">
         Did you say bass or bass? I have a bad memory
    </div>
    <div className="col text-center" style={color}>
       {textResult} 
    </div>
    <div className="col text-center"  >
       Score: {score} Top Score: {topScore} 
    </div>
    
</nav>
</div> 

);
};

const styles={
    navigation: {
        background: '#30485e',
        fontFamily: 'Fredoka One', 
        fontSize: '1.1em',
        textDecoration: 'none',
        
    }
}



export default Navbar;