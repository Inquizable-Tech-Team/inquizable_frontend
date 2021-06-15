import Axios from 'axios'

export const loginFunction = (user) => {
    return Axios
      .post('https://inquizable.herokuapp.com/users/login', user)
      .then(response => {
        console.log(response)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
