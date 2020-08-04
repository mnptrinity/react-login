import axios from 'axios';


/**
 * Function for checking the valid user...
 * @param {Object} payload 
 */
export const verifyUser = async (payload) => {
   let result = await axios.post('https://reactlogin46.herokuapp.com/api/users/login', payload)
        .then(response => {
            if (response.data.message === "success") return { result: true, message: "valid User" }
            return { result: false, message: response.data.message }
        })
        .catch(error => {
            return { result: false }
        });

    return result;
}