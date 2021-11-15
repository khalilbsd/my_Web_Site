export default (contact=[],action)=>{
    switch (action.type) {
        case 'FETCH_CONTACTS':
            return  action.payload
        case 'CREATE_CONTACT':
            return [...contact,action.payload];
        default:
           return contact;
    }
}