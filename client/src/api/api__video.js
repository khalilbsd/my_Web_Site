import axios from 'axios'
import {api,channelId,apiKey,amv,cinema} from '../private/Youtube'
const api="https://youtube.googleapis.com/youtube/v3/playlistItems??"

//const url="https://youtube.googleapis.com/youtube/v3/search?channelId=UCkaRxsjn6-VmFFtXlsMxp6Q&key=AIzaSyDzvkfB9JbN3Qr67rM6-dN_CxKYgpQyynE"


export const fetchCinVideos=()=>axios.get(api+cinema+'&'+apiKey);
export const fetchAmvVideos=()=>axios.get(api+amv+'&'+apiKey);
//export const fetchNextPage=(token)=>axios.get(api+channelId+'&pageToken='+token+'&'+apiKey)
