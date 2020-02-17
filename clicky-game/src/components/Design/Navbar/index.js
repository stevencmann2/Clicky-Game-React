import React from 'react';

const Navbar = ({
    score, 
    topScore,
    textResult
}) => {

return(


<nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
 
    <div className="col text-center">
         Did you say Bass or Bass? I have Bad Memory
    </div>
    <div className="col text-center">
       {textResult} 
    </div>
    <div className="col text-center"  >
        Score: {score} | Top Score: {topScore} 
    </div>
   
</nav>


);
};



export default Navbar;