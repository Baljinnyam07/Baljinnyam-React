import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Articles() {
    const {id} = useParams();
    const [article,setArticle]=useState({});
    useEffect(()=>{
        fetch("https://demo-api-one.vercel.app/api/articles/"+id)
        
        .then((res)=>res.json())
        .then((data)=>{
            setArticle(data.body);
        })
    },[])

  return (<>
  
  {/* <div>
<h1>{article.name}</h1>
<p></p>
    </div> */}
    <Container>
    
      
        <Row xs={1} md={2}>
        <Col><h1>{article.name}</h1>
        <h2>{article.description}</h2></Col>
        <Col><h3><img className="imagess" src={article.imageUrl}/></h3></Col>
      </Row>
      <Col><p>{article.text}</p></Col>
      
    
    </Container>
  
  </>
    
  );
}