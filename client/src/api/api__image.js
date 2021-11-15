import axios from 'axios'

const url="http://localhost:5000/api/images"

export const fetchImage=()=>axios.get(url);
export const postImage=(newImage)=>axios.post(url,newImage);

