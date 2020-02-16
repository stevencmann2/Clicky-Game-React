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
    
    const clickHandler = (id, guessed) => {
        console.log(id, guessed)
     
        const filteredGuitars = guitarsList.filter(guitar => guitar.id===id )
        setGuitarsList(filteredGuitars);
    }
  
    const randomize = (id) => {
        return Math.floor(Math.random() * Math.floor(13));
      }

    return(
        <div>
             <Navbar />
                
                <Wrapper>
                
                {guitarsList.map(guitar =>(


                    <MemoryCard
                      key={guitar.id}  
                      id = {guitar.id}
                      name = {guitar.name}
                      bassImage = {guitar.image}
                      guessed = {guitar.guessed}
                      clickHandler = {clickHandler}
                      
                    />
                  
                  ))}
                </Wrapper>
            <Footer />
        </div>
    )

}


export default App;
