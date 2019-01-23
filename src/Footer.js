import React, {Component}  from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css'

class Footer extends Component{

    render() {
        return(
            <Container>
        <Row>
            <Col className="parfoot">
        <p>We are leaders in 10 countries: <a href="#">Poland</a> , <a href="#">Turkey</a>, <a href="#">Spain</a>, <a href="#">Italy</a> <a href="#"> Czech Republic</a>, <a href="#">Mexico</a>, <a href="#">Colombia</a>, <a href="#">Brazil</a>, <a href="#">Argentina</a> and <a href="#">Chile</a></p>
        <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser. <br/> www.docplanner.com © 2018</p>
        </Col>
        </Row>
        </Container>
)
    }
}
export default Footer;