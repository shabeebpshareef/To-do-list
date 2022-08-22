import React,{useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Todo=(props)=>{


    const [todoData,setTodoData] = useState([])
useEffect(()=>{
 
if(props.isSaved==true && props.value==="Todo"){
  setTodoData(preValue=>[...preValue,{title:props.title,description:props.description}])
  props.setTitle('');
  props.setDescription('')
  props.setIsSaved(!props.isSaved)
  props.setModalVisible(false)
  props.setValue('select one')

}
},[props.isSaved])





    return(<div>
      <h1>To-Do</h1>
        {todoData.map((item,id)=>(
              <Card key={id}>
             
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}{id}
                </Card.Text>
              </Card.Body>
            </Card>
            ))}
            
    </div>)
}


export default Todo;