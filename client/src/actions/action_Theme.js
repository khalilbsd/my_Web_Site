
export const action__post__theme=(theme)=>async(dispatch)=>{
    try {
        dispatch({ type: 'POST_THEME', payload: theme });
    } catch (error) {
        console.log(error);
    }
}

