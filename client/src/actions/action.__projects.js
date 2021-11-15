import * as api from '../api/api__projects'

export const getGithubAccount = () => async (dispatch) => {
    try {
        const {data} = await api.fetchGithubAccount();
        dispatch({type: 'FETCH_GIT', payload: data})
    } catch (error) {
        console.log({message:error.message})
    }
}

export const getGithubRepos = () => async (dispatch) => {
    try {
        const {data} = await api.fetchGithubRepos();
        dispatch({type: 'FETCH_GIT', payload: data})
    } catch (error) {
        console.log({message:error.message})
    }
}
