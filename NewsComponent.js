import React, { useEffect, useState } from 'react'

function NewsComponent() {
    const [news,setNews] = useState([]);
    //! we should we call our api useeffect:- first one is setter function();second one is [] array
    // how to make an api called-fetch ,await,async
    useEffect(() => {
        (async function f1() {
            const response = await fetch
     ("https://gnews.io/api/v4/search?q=india&lang=en&country=us&max=10&apikey=916088ba02890add290f53c6f0e2f386");

            const data = await response.json();

          setNews(data["articles"]);
        })();
    },[]);

    if(news.length == 0) {
      return(
        <img style={{width:"500px"}}
        src="https://media.istockphoto.com/id/1302436578/video/loading-circle-icon-animation-on-black-background-4k-video-loopable-preloader.jpg?s=640x640&k=20&c=WiK1w7O6VvTD7Xu7Ov8DdzGY2lX2bSlJDxw4r4DHzfI="
           alt="" />
         );
    }
      return (
        <div>
         
            <img  style={{width: "500px"}} src={news[0]["image"]} alt="" />
            <h1>{news[0] ["title"]}</h1>
            <p>{news[0] ["description"]}</p>
            <p>{news[0] ["content"]}</p>
            <h2>{news[0] ["publishedAt"]}</h2>
            <br/>
            <br />
            <br />
            <br/>

            <img  style={{width: "500px"}} src={news[1]["image"]} alt="" />
            <h1>{news[1] ["title"]}</h1>
            <p>{news[1] ["description"]}</p>
            <p>{news[1] ["content"]}</p>
            <h2>{news[1] ["publishedAt"]}</h2>
            <br/>
            <br />
            <br />
            <br/>

            <img  style={{width: "500px"}} src={news[2]["image"]} alt="" />
            <h1>{news[2] ["title"]}</h1>
            <p>{news[2] ["description"]}</p>
            <p>{news[2] ["content"]}</p>
            <h2>{news[2] ["publishedAt"]}</h2>
            <br/>
            <br />
            <br />
            <br/>
        </div>
    );
    }

export default NewsComponent;