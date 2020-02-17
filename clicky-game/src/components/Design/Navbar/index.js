import React from 'react';

const Navbar = ({
    score, 
    topScore
}) => {

return(


<nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
 
    <div className="col text-center">
         Clicky Memory Game
    </div>
    <div className="col text-center">
        Begin by clicking any image
    </div>
    <div className="col text-center"  >
        Score: {score} | Top Score: {topScore()} 
    </div>
   
</nav>


);
};



export default Navbar;