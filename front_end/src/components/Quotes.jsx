import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quotes = () => {
    const url = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=aec284fb51284718bff17eaedabd526f';
    const [content, setContent] = useState(null);
    
    useEffect(() => {
      axios.get(url)
      .then(function (response) {
        console.log(response.data.articles);
        setContent(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      }) 
    }, [url]);   
    
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    const i1 = arr[Math.floor(Math.random()*arr.length)];
    arr.splice(i1, 1);
    const i2 = arr[Math.floor(Math.random()*arr.length)];
    arr.splice(i2, 1);   
    const i3 = arr[Math.floor(Math.random()*arr.length)];
    arr.splice(i3, 1);
    const i4 = arr[Math.floor(Math.random()*arr.length)];
    arr.splice(i4, 1);
    const i5 = arr[Math.floor(Math.random()*arr.length)];
    arr.splice(i5, 1);


    if(content) {
      return(
          <div className='api-quotes'>
              <div className='api-content'>
                <img src={content[i1].urlToImage} height="300px" width="600px" alt=""/>
                <div className='about-api'>
                  <h5>{content[i1].title}</h5>
                  <p>{content[i1].description}<a href={content[i1].url}>View More</a></p>
                </div>
              </div>
              <div className='api-content'>
                <div className='about-api'>
                  <h5>{content[i2].title}</h5>
                  <p>{content[i2].description}<a href={content[i2].url}>View More</a></p>
                </div>
                <img src={content[i2].urlToImage} height="300px" width="600px" alt=""/>
              </div>
              <div className='api-content'>
                <img src={content[i3].urlToImage} height="300px" width="600px" alt=""/>
                <div className='about-api'>
                  <h5>{content[i3].title}</h5>
                  <p>{content[i3].description}<a href={content[i3].url}>View More</a></p>
                </div>
              </div>
              <div className='api-content'>
                <div className='about-api'>
                  <h5>{content[i4].title}</h5>
                  <p>{content[i4].description}<a href={content[i4].url}>View More</a></p>
                </div>
                <img src={content[i4].urlToImage} height="300px" width="600px" alt=""/>
              </div>
              <div className='api-content'>
                <img src={content[i5].urlToImage} height="300px" width="600px" alt=""/>
                <div className='about-api'>
                  <h5>{content[i5].title}</h5>
                  <p>{content[i5].description}<a href={content[i5].url}>View More</a></p>
                </div>
              </div>
          </div>
      )
    }
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    )
}

export default Quotes;
