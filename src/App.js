import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react'
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Grids from './components/Cards'


import Form from 'react-bootstrap/Form';

import background from "./pic.jpg";
import {FaPlus} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal';

import Dropdown from 'react-bootstrap/Dropdown';



function Navigation() {
  return (

    <Navbar bg="light" expand="lg">   
      <Container>
        <FaHome id="home" />
      <SearchBar />
        <Navbar.Brand href="#home">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>       
      </Container>
    </Navbar>
  );
}

function SearchBar(){
  return (
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
    />
    </Form>
  );
}



function App() {

  const [value, setValue] = useState('select one');
const [title,setTitle] = useState('');
const [description,setDescription]  = useState('') 
const [isSaved,setIsSaved] = useState(false);
  const [modalVisible,setModalVisible] = useState(false)
  const displayModal = ()=>{
    setModalVisible(!modalVisible)
      }

      const handleSave=()=>{
        setIsSaved(!isSaved);
      }
  return (
    
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      
      <Navigation />

      <FaPlus onClick={displayModal} className='plusIcon'/>
      
      <Grids  setIsSaved={setIsSaved} setTitle={setTitle} setDescription={setDescription} isSaved={isSaved} value={value} title={title} description={description} handleSave={handleSave} setModalVisible={setModalVisible} setValue={setValue}/>
      
      {modalVisible?(<Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Add Data</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className='dropdownContainer'>
      <label>
        Task Status
      <select value={value} onChange={(event)=>setValue(event.target.value)} >
      <option value="select one">select one</option>
        <option value="Todo">Todo</option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
      </select></label></div>

      <div className='formContainer'>
      <form>
  <label>
Title    <input type="text"  value={title} onChange={(event)=>setTitle(event.target.value)} />
  </label>
  <label>
Description    <input type="text"  value={description} onChange={(event)=>setDescription(event.target.value)} />
  </label>
 
</form>
<Button onClick={handleSave}>submit</Button>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{
          setModalVisible(false)
        }} variant="secondary">Close</Button>
  
      </Modal.Footer>
    </Modal.Dialog>):null}
    </div>
  );
}

export default App;
