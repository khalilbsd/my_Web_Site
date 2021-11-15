import * as api from '../api/api__video'

export const getCinemaVideos = () => async (dispatch) => {
    try {
        const {data} = await api.fetchCinVideos();
        dispatch({type: 'FETCH_CIN_VIDEOS', payload: data})
    } catch (error) {
        console.log({message:error.message})
    }
}



export const getAmvVideos =()=>async (dispatch)=>{
    try {
        const {data}=await api.fetchAmvVideos();
        dispatch({type: 'FETCH_AMV_VIDEOS', payload: data})
    } catch (error) {
        console.log(error)
    }
}

/*
export const getNextPage = (token) => async (dispatch) => {
    try {
        const {data} = await api.fetchNextPage(token);
        dispatch({type: 'FETCH_NEXT', payload: data})
    } catch (error) {
        console.log({message:error.message})
    }
}

*/
