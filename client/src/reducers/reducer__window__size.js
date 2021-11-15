export default (size=[],action)=>{
    switch (action.type) {
        case 'SET_SIZE':
            return action.payload;
        default:
           return size;
    }
}