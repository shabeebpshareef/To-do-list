import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Container} from 'react-bootstrap'

import Todo from './Todo';
import Doing from './Doing';
import Done from './Done';


const Grids=(props)=> {
    return (
      <div>
     
      <Container>
   <Row>  
    <Col className="bg-light p-2"><Todo  setValue={props.setValue} setModalVisible={props.setModalVisible} setTitle={props.setTitle} setDescription={props.setDescription} setIsSaved={props.setIsSaved} isSaved={props.isSaved} value={props.value} title={props.title} description={props.description} handleSave={props.handleSave}/></Col>  
    <Col className="bg-light p-2"><Doing  setValue={props.setValue} setModalVisible={props.setModalVisible} setTitle={props.setTitle} setDescription={props.setDescription} setIsSaved={props.setIsSaved} isSaved={props.isSaved} value={props.value} title={props.title} description={props.description} handleSave={props.handleSave}/></Col>  
    <Col className="bg-light p-2"><Done  setValue={props.setValue} setModalVisible={props.setModalVisible} setTitle={props.setTitle} setDescription={props.setDescription} setIsSaved={props.setIsSaved} isSaved={props.isSaved} value={props.value} title={props.title} description={props.description} handleSave={props.handleSave}/></Col>  
  </Row>
  </Container>
    
    </div>
    );
  }

  export default Grids;