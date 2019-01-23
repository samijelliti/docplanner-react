import React, {Component}  from 'react';
import doc from './doc.svg'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import './Card1.css'


class Card1 extends Component{
    constructor(props){
        super(props);
        
    }
    render() {
        return(
            <div>
      <div className=" worldbig31" >
              
        
              <img src={this.props.person.image1} width="50" height="50"/>
              <h4>{this.props.person.titre1}</h4>
              <p>{this.props.person.titre2}</p>

         </div>
    </div>
        )
    }
}
export default Card1;