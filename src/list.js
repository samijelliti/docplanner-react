import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import Item from './item.js'


const tab=[
    {name:"ahmed",
     lastname:"ben ali"}
     ,
     {name:"ali",
     lastname:"ben ali"},

     {name:"nizar",
     lastname:"ben ali"},
     {name:"wael",
     lastname:"ben ali"},
     {name:"hamza",
     lastname:"ben ali"}
]

class List extends Component {
   
    render() { 
        return ( <div className="list">
          { tab.map((el,index)=><Item item={el} key={index} />)}
        </div>);
    }
}
 
export default List;