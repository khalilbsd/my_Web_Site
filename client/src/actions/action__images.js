import * as api from '../api/api__image'

export const getImages = () => async (dispatch) => {
    try {
        const {data} = await api.fetchImage();
        dispatch({type: 'FETCH_IMAGES', payload: data})
    } catch (error) {
        console.log({message:error.message})
    }
}


export const createImage = (image) => async (dispatch) => {
    try {
        const {data} = await api.postImage(image);
        dispatch({type: 'CREATE_IMAGE', payload: data})
    } catch (error) {
        console.log(error)
    }
}
