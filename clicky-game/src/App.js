import React, { useState } from 'react';
import {
    Navbar, 
    Footer, 
    MemoryCard,
    Wrapper,
} from "./components";
import guitars from "./guitars.json";


const App = () => {

    const [guitarsList, setGuitarsList]= useState(guitars);
    const clickHandler = (id) => {
        const filteredGuitars = guitarsList.filter(guitar => guitar.id!==id)
        setGuitarsList(filteredGuitars);
    }

    return(
        <div>
             <Navbar />
                
                <Wrapper>
                
                {guitarsList.map(guitar =>(
                    
                    <MemoryCard
                      id = {guitar.id}
                      name = {guitar.name}
                      bassImage = {guitar.image}
                      clickHandler = {clickHandler}
                    />
                   
                  ))}
                </Wrapper>
            <Footer />
        </div>
    )

}


export default App;
