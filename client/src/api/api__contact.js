import axios from 'axios'

const url="http://localhost:5000/api/contacts"

export const fetchContacts=()=>axios.get(url);
export const postContact=(newContact)=>axios.post(url,newContact);

