import { useEffect, useState } from "react";
// import {  news } from "./sampleNews";
export default function News() {
  const [article, setArticle] = useState([]);
  // const newsList = news
  const newsLists = []

  useEffect(() => {
   const fetching =()=>{
    fetch(
       "https://gnews.io/api/v4/search?q=tax%20AND%20GST&lang=en&country=in&max=10&apikey=0592711ca96bfa23d52fbd0cf0e4128b"
     )
       .then((res) => res.json())
       .then((data) => setArticle(data.articles));
   }
     fetching()
  },[]);

  for (let i = 0; i < article.length; i++) {
    newsLists.push(article[i])
  }
  const mapping = newsLists?.map((newss, n)=>{
   return(
    <>
    <div className="col-md-3 col-lg-3 border border-2 p-5 " key={n}>
        <h6 className=""><span className="text-light text-uppercase fw-bold">Heading : </span>{newss?.title}</h6>
        <a href={newss?.url} target="_blanck" className="float-right">Read more</a>
    </div>
    </>
   )
}).slice(0, 8)

  return (
    <div className="container-fluid mt-5 p-4" style={{background : "#4379c6"}} id="news">
      <div className="container my-4">
      <div className="section-header text-light">
              <h1 className="font-weight-bold text-light display-3">News</h1>
              <p className="text-light">Notifications and News updates</p>
            </div>
    <div className="row text-light">

        {
            mapping
        }
   </div>
      </div>
    </div>
  );
}
