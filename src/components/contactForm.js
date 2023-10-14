import React from 'react'
import { Form,Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const ContactForm = () => {
  
  const dispatch = useDispatch();

  const [name,setName]=useState();
  const [phoneNumber,setPhoneNumber]=useState();
  
  const getName = (event)=>{
    //console.log(event.target.value)
    setName(event.target.value)
  }
  const getPhoneNumber = (event) => {
    setPhoneNumber(event.target.value);

  }
  const addContact = (event) => {
    event.preventDefault();
    dispatch({type:"ADD_CONTACT", payload:{
      //name:name,
      //phoneNumber:phoneNumber
      name,phoneNumber
    } });
    event.target.name.value="";
    event.target.number.value="";
   
  }

  return (
    <Form onSubmit={(event)=>addContact(event)}> 
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" name="name" placeholder="이름을 입력하세요."
          onChange={(event)=>getName(event)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" name="number" placeholder="전화번호를 입력하세요." 
          onChange={(event)=>getPhoneNumber(event)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  )
}

export default ContactForm;
