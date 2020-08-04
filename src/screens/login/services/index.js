import axios from 'axios';


/**
 * Function for checking the valid user...
 * @param {Object} payload 
 */
export const verifyUser = async (payload) => {
   let result = await axios.post('http://7bf1c066e8fd.ngrok.io/api/users/login', payload)
        .then(response => {
            if (response.data.message === "success") return { result: true, message: "valid User" }
            return { result: false, message: response.data.message }
        })
        .catch(error => {
            return { result: false }
        });

    return result;
}