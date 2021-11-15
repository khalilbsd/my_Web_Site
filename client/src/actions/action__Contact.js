import * as api from '../api/api__contact'

export const getContacts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchContacts();
        dispatch({type: 'FETCH_CONTACTS', payload: data})
    } catch (error) {
        console.log({message:error.message})
    }
}


export const postContact = (contact) => async (dispatch) => {
    try {
        const {data} = await api.postContact(contact);
        dispatch({type: 'CREATE_CONTACT', payload: data})
    } catch (error) {
        console.log(error)
    }
}
