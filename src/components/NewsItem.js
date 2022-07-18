import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
  

const NewsItem =(props)=> {
  
  
    let{title,description,imageUrl,newsUrl,source} = props 
    return (
        <div>
        <Card>
          <CardImg width="auto" src={imageUrl} alt="Not Available" style={{height:"165px"}} />
          <CardBody>
            <CardTitle><strong>{title}</strong></CardTitle>
             <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
              {source}</span> 
            <CardText height="auto" >{description}</CardText>
            <Button href={newsUrl} target="_blank" className='btn btn-sm btn-dark'>Read more</Button>
          </CardBody>
        </Card>
      </div>
    )
  
}

export default NewsItem