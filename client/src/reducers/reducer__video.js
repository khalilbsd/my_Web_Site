export default (video=[],action)=>{
    switch (action.type) {
        case 'FETCH_VIDEOS':
            return  action.payload
        case 'FETCH_NEXT' :
            return action.payload
        default:
           return video;
    }
}