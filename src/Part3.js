import React, {Component}  from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Part3.css'
import City from './item.js'

const tab=[
    {image:"https://www.docplanner.com/images/barcelona.png",
     city:"Warsaw"}
     ,
     {image:"https://www.docplanner.com/images/barcelona.png",
     city:"Barcelona"}
     ,
     {image:"https://www.docplanner.com/images/istanbul.png",
     city:"Isanbul"}
     ,
     {image:"https://www.docplanner.com/images/rome.png",
     city:"Rome"}
     ,
     {image:"https://www.docplanner.com/images/mexico-city.png",
     city:"Mexico city"}
     ,
     {image:"https://www.docplanner.com/images/curitiba.png",
     city:"Cortiba"}
]

class Part3 extends Component{
    render() {
        return(
            <Container>
                <Row>
            <Col>
            <p className="titrepart2">Improve the lives of millions.<br/> Change yours forever</p>
            </Col>
        </Row>
        <Row>
            <Col>
            <p className="parpart2">More than 500 team mates share our same vision, goals and passion.<br/> With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic,<br/> Mexico City, Colombia and Curitiba, our search for great talent never<br/> stops.</p>
            </Col>
        </Row>
                <Row>
              <Col className="Part3">
                  { tab.map((el,index)=><City city={el} key={index} />)}
                </Col>
                </Row>
            </Container>
        )
            }
           

        

    
}
export default Part3;