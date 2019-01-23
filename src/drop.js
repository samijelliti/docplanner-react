import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Drop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          CHOOSE COUNTRY
        </DropdownToggle>
        <DropdownMenu>
          
          <DropdownItem>TUNISIA</DropdownItem>
          
         
          <DropdownItem>ALGERIA</DropdownItem>
          <DropdownItem>MAROCCO</DropdownItem>
          <DropdownItem>CANADA</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}