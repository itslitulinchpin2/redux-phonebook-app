import React from 'react'
import SearchBox from './searchBox';

import ContactItems from './contactItems';
import {useState,useEffect} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const ContactList = () => {
  const contactList = useSelector(state=>state.contactList)
  console.log(contactList);
  
  return (
    <div>
      
      
        <SearchBox></SearchBox>
        {contactList.map(data=>
          <ContactItems item={data}></ContactItems>
        )}
        

        
    </div>
  )
}

export default ContactList;
