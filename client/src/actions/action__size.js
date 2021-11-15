
export const setWindowSize = (size) => async (dispatch) => {
    try {
        dispatch({type: 'SET_SIZE', payload: size})
    } catch (error) {
        console.log(error)
    }
}
