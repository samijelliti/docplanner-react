import React, {Component}  from 'react';
import { Container, Row, Col } from 'reactstrap';
import sygnet from './sygnet.png'
import './Part2.css'
import Card1 from './Card1'
import List from './list'


class Part2 extends Component{
    constructor(){
        super();
        this.state = {
            people : [
                {
                    titre1: "Leader in 10 countries",
                    titre2: " Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
                    image1: "https://www.docplanner.com/img/flag.png",
                },
                {
                    titre1: "1 million appointments",
                    titre2: " booked last month",
                    image1: "https://www.docplanner.com/img/patients.png",
                },
                {
                    titre1: "30 million unique patients",
                    titre2: "visit us every month",
                    image1: "https://www.docplanner.com/img/visits.png",
                },
                {
                    titre1: "2 million active doctors",
                    titre2: "trust in our solutions us every month",
                    image1: "https://www.docplanner.com/img/doctors.png",
                },
            ]

        }
    }
    render() {
        let cards=this.state.people.map(person=>{
            return (
                <Col sm="5">
                <Card1 person={person}/>
                </Col>
            )
        })
        return(
            <Container fluid className="contpart2">
        <Row>
            <Col xs="6">
            <h1>The world's <br/>biggest healthcare platform</h1>
            <h6>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</h6>
            <img src={sygnet} width="200" height="200"/>
            </Col>
            <Col xs="6">
            <Row>
            {cards}</Row>
            
            </Col>
        </Row>
        

        </Container>
        )
    }
}
export default Part2;