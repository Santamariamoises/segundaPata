import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter,Card, CardBody} from 'mdbreact';


class Checkout extends React.Component {

  constructor() {
    super(),
    this.state = {
      name: 'xxxxx xxx',
      number: '0000000000000000',
      month: 'xx',
      day: 'xx',
      ccv: 'CCV'
    }

  }



  //Name of Card Owner
  nameChange(n) {
    this.setState({
      name: n.target.value
    });
  }
  //Card Number
  numberChange(c) {
    this.setState({
      number: c.target.value
    });
  }
  //Expiration
  monthChange(m) {
    this.setState({
     month: m.target.value
    });
  }
  dayChange(d) {
    this.setState({
     day: d.target.value
    });
  }
  //CCV
  ccvChange(v) {
    this.setState({
     ccv: v.target.value
    });
  }


  render() {
    return (
        <Container className="back" >



    <div className="credit">

        <div className="small-2 columns">
          <h1 className="credit__bank">My Bank</h1>
        </div>

        <div className="small-6 columns">
          <img className="credit__mc" src="chip.jpg" alt="" />
        </div>
        <div className="column">
          <p className="credit__card-number">{this.state.number}</p>
          <span className="credit__ccv">{this.state.ccv}</span>
        </div>
        <div  className="small-9 columns">
          <label className="cardholder" >Card Holder
            <p className="credit__name">{this.state.name}</p>
          </label>
        </div>
        <div className="Expiration">
          <label>EXPIRATION DATE
            <p className="credit__date">{this.state.month} / {this.state.day}</p>
          </label>
        </div>

        <Card className="card">
          <CardBody>
            <form>
  <div className="small-5 columns end">
    <div className="callout margin-top50">
      <label>NAME
        <input type="text" onChange={this.nameChange.bind(this)}/>
      </label>
      <div className="row">
      <label>NUMBER
        <input type="text" maxLength="16" onChange={this.numberChange.bind(this)}/>
      </label>
      </div>
      <div className="row">
        <label className="column">EXPIRATION DATE</label>
        <div className="small-4 columns">
          <input type="text" maxLength="2" onChange={this.monthChange.bind(this)} />
        </div>
        <div className="small-4 columns end">
          <input type="text" maxLength="2" onChange={this.dayChange.bind(this)}/>
        </div>
      </div>
      <div className="row">
        <div className="small-4 column">
          <label>CCV
            <input  type="text" maxLength="3" onChange={this.ccvChange.bind(this)} />
          </label>
        </div>
      </div>
    </div>
  </div>

    <Button  onClick={(e) => { if (window.confirm('Are you sure you wish to purchase this item?')) this.submitItem(e) } }>
              Submit
</Button>
</form>
</CardBody>
</Card>
  </div>



  </Container>




    );
  }
}

export default Checkout;
