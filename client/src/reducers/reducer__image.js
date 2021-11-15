export default (image=[],action)=>{
        switch (action.type) {
            case 'FETCH_IMAGES':
                return  action.payload
            case 'CREATE_IMAGE':
                return [...image,action.payload];
            default:
               return image;
        }
}