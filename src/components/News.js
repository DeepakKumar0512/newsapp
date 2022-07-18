import React, {useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [country, setCountry] = useState("in")

  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  },[])
    

  const updateNews=async ()=>{
    let url=`https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${country}.json`;
    let data= await fetch(url)
    let parsedData =await data.json()
    setArticles(parsedData.articles)
  }
  
  const handlerin =()=>{
    setCountry("in")
     updateNews()
  }
  const handlerus =()=>{
    setCountry("us")
     updateNews()
  }
  const handlerau =()=>{
    setCountry("au")
     updateNews()
  }
  const handlerru =()=>{
    setCountry("ru")
     updateNews()
  }
  const handlerfr =()=>{
    setCountry("fr")
     updateNews()
  }
  const handlergb =()=>{
    setCountry("gb")
     updateNews()
  }
 
    
  return (
    <div className='container ' style={{marginTop:"65px"}}>
      <h2 style={{textAlign:'-webkit-center'}}>News-Teller / Top Headlines</h2>
      <div className='row'>
          {articles.map((element)=>{
             
           return    <div className='col-md-4 my-2' key={element.url} >
                      <NewsItem  title={element.title==null?" ": element.title.length>50?element.title.slice(0,50) +"..." :element.title} description={element.description==null?"Description not available": element.description.length>100?element.description.slice(0,100) +"..." :element.description} imageUrl={element.urlToImage} newsUrl={element.url==null?element.url="https://c.ndtvimg.com/2022-06/c245r3gg_rafael-nadal-afp_625x300_04_June_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675":element.url} source={element.source.name==null?"unknown":element.source.name} />
                    </div>
           })}  
          </div> 
          <div className="d-flex justify-content-center bg-dark">
          <div className="btn-toolbar my-2" role="toolbar" aria-label="Toolbar with button groups">
             <h3  className='mx-3' style={{color:"white"}}>Country:</h3>
                <div  className='container'>
                  <button type="button" onClick={handlerin} className="btn btn-primary my-1 mx-1">India</button>
                  <button type="button" onClick={handlerus} className="btn btn-primary my-1 mx-1">USA</button>
                  <button type="button" onClick={handlerau} className="btn btn-primary my-1 mx-1">Australia</button>
                  <button type="button" onClick={handlerru} className="btn btn-primary my-1 mx-1">Russia</button>
                  <button type="button" onClick={handlerfr} className="btn btn-primary my-1 mx-1">France</button>
                  <button type="button" onClick={handlergb} className="btn btn-primary my-1 mx-1">United Kingdom</button>
                </div>
           
          </div>
    </div>
    </div>
    )
}

News.defaultProps ={
  category:"general"
}
News.propTypes ={
  category:PropTypes.string
}

export default News