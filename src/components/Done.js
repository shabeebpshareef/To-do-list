import React,{useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'

const Done=(props)=>{

const [id,setId] = useState()
   



    useEffect(()=>{
const data = localStorage.getItem('doneData');
if(data){
    setDoneData(JSON.parse(data))
}
    },[])
    const [doneData,setDoneData] = useState([])
    
    
    
    useEffect(()=>{
        localStorage.setItem('doneData', JSON.stringify(doneData) )
    })
    
    
    useEffect(()=>{
 
if(props.isSaved==true && props.value==="Done"){
  setDoneData(preValue=>[...preValue,{title:props.title,description:props.description}])
  props.setTitle('');
  props.setDescription('')
  props.setIsSaved(!props.isSaved)
  props.setModalVisible(false)
  props.setValue('select one')

}
},[props.isSaved])






    return(<div>
        <h1>Done</h1>
        {doneData.map((item,id)=>(<Card key={id}>
              <Card.Body onClick={()=>{
                setId(id)
              }}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}{id}
                </Card.Text>
          
              </Card.Body>
            </Card>))}
            
    </div>)
}


export default Done;