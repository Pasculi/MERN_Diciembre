import React, { useState, useEffect } from 'react'
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=n2HZLXUdMhtXo9SnyNG2fGN9chMyBNmM&q=Suicide+Squad&limit=10&offset=0&rating=g&lang=es'
function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log("Actualizando Gifs")
    fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const { data } = response;
        const gifs = data.map(image => image.images.downsized_medium.url)
        setGifs(gifs);
      })

  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(gif => (
            <img src={gif} alt="" />
          ))
        }
        <br />
        <br />

      </section>
    </div>
  );
}

export default App;
