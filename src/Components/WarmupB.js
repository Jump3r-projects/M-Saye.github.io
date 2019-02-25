import React, { Component } from 'react';
import '../App.css';
import { Row, Col } from 'reactstrap';

class WarmupB extends Component {
    render() {
        let weight = this.props.weight;
        let bar = this.props.bar;
        let toggle = {display: this.props.isToggle? 'block' : 'none'}
        let rowCollapse; 
        if (this.props.isToggle) {
            rowCollapse = "row"
        } else {
            rowCollapse = "Row-Collapse"
        }
        function round(num) {
            return Math.round(num*2)/2;
        }    
        return (
            <Row className={rowCollapse}>
                <Col style={toggle}>B</Col>
                <Col style={toggle}>50</Col>
                <Col style={toggle}>5</Col>
                <Col style={toggle}>{(round(weight*5/10)).toFixed(1)}</Col>
                <Col style={toggle}>{((round(weight*5/10))-bar).toFixed(1)}</Col>        
            </Row>

        )
    }
}

export default WarmupB;