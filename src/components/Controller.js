import Axios from 'axios'

export const loginFunction = (user) => {
    return Axios
      .post('https://inquizable.herokuapp.com/users/login', user)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  export const registrationFunction = (newUser) => {
    return Axios
      .post('https://inquizable.herokuapp.com/users/register', newUser)
      .then(response => {
        /* console.log(response.data) */
        return response.data
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  export const submitFunction = (question) => {
    return Axios
      .post('https://inquizable.herokuapp.com/questions', question)
      .then(response => {
        console.log(response.data)
        return response.data
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  export const updatePointsFunction = (id, user) => {
    return Axios
      .put(`https://inquizable.herokuapp.com/users/${id}`, user)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err.message)
      })
  }

 
