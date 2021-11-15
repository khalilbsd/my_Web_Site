export default (project=[],action)=>{
    switch (action.type) {
        case 'FETCH_GIT':
            return action.payload;
        default:
           return project;
    }
}