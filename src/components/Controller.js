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
    .put(`https://inquizable.herokuapp.com/users/${id}/points`, user)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const fetchContribution = async () => {
  return Axios
    .get("https://inquizable.herokuapp.com/users/contributions")
    .then((response) => {
      return (response.data)
    })
    .catch((error) => console.log(error));
};

export const fetchPercentages = async () => {
  return Axios
    .get("https://inquizable.herokuapp.com/users/percentage")
    .then((response) => {
      return (response.data)
    })
    .catch((error) => console.log(error));
};

export const fetchPoints = async () => {
  return Axios
    .get("https://inquizable.herokuapp.com/users/points")
    .then((response) => {
      return (response.data)
    })
    .catch((error) => console.log(error));
};

export const fetchUser = async (id) => {
  return Axios
    .get(`https://inquizable.herokuapp.com/users/${id}`)
    .then((response) => {
      return (response.data[0])
    })
    .catch((error) => console.log(error));
};

export const fetchAllUsers = async () => {
  return Axios
    .get("https://inquizable.herokuapp.com/users/count")
    .then((response) => {
      return (response.data[0])
    })
    .catch((error) => console.log(error));
};
export const fetchQuestionAmount = async () => {
  return Axios
    .get("https://inquizable.herokuapp.com/questions/count")
    .then((response) => {
      return (response.data[0])
    })
    .catch((error) => console.log(error));
};
export const fetchAnswered = async () => {
  return Axios
    .get("https://inquizable.herokuapp.com/users/answered ")
    .then((response) => {
      return (response.data[0])
    })
    .catch((error) => console.log(error));
};
export const fetchCorrect = async () => {
  return Axios
    .get("https://inquizable.herokuapp.com/users/correct")
    .then((response) => {
      return (response.data[0])
    })
    .catch((error) => console.log(error));
};
