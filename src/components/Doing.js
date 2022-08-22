import React,{useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';

const Doing=(props)=>{


    const [doingData,setDoingData] = useState([])
useEffect(()=>{
 
if(props.isSaved==true && props.value==="Doing"){
  setDoingData(preValue=>[...preValue,{title:props.title,description:props.description}])
  props.setTitle('');
  props.setDescription('')
  props.setIsSaved(!props.isSaved)
  props.setModalVisible(false)
  props.setValue('select one')

}
},[props.isSaved])





    return(<div>
        <h1>Doing</h1>
        {doingData.map((item,id)=>(<Card key={id}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}{id}
                </Card.Text>
              </Card.Body>
            </Card>))}
            
    </div>)
}


export default Doing;