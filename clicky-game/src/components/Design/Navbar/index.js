import React from 'react';

const Navbar = ({
    score, 
    topScore
}) => {

return(


<nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
    <ul>
    <li className="navbar-brand">
        Clicky Memory Game
    </li>
    <li className="navbar-brand">
        Begin by clicking any image
    </li>
    <li className="navbar-brand float-right">
        Score: {score = 0} | Top Score: {topScore = 0}
    </li>
    </ul>
</nav>


);
};



export default Navbar;