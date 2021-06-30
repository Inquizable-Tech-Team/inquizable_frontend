import Axios from 'axios'
require('dotenv').config()
const endpoint = process.env.REACT_APP_ENDPOINT

export const loginFunction = (user) => {
  return Axios
    .post(`${endpoint}/users/login`, user)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const registrationFunction = (newUser) => {
  return Axios
    .post(`${endpoint}/users/register`, newUser)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const submitFunction = (question) => {
  return Axios
    .post(`${endpoint}/questions`, question)
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
    .put(`${endpoint}/users/${id}/points`, user)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const fetchContribution = async () => {
  return Axios
    .get(`${endpoint}/users/contributions`)
    .then((response) => {
      return (response.data)
    })
    .catch((error) => console.log(error.message));
};

export const fetchPercentages = async () => {
  return Axios
    .get(`${endpoint}/users/percentage`)
    .then((response) => {
      return (response.data)
    })
    .catch((error) => console.log(error.message));
};

export const fetchPoints = async () => {
  return Axios
    .get(`${endpoint}/users/points`)
    .then((response) => {
      return (response.data)
    })
    .catch((error) => console.log(error.message));
};

export const fetchUser = async (id) => {
  return Axios
    .get(`${endpoint}/users/${id}`)
    .then((response) => {
      return (response.data)
    })
    .catch((error) => console.log(error.message));
};

export const fetchAllUsers = async () => {
  return Axios
    .get(`${endpoint}/users/count`)
    .then((response) => {
      return (response.data[0])
    })
    .catch((error) => console.log(error.message));
};
export const fetchQuestionAmount = async () => {
  return Axios
    .get(`${endpoint}/questions/count`)
    .then((response) => {
      return (response.data[0])
    })
    .catch((error) => console.log(error.message));
};
export const fetchAnswered = async () => {
  return Axios
    .get(`${endpoint}/users/answered`)
    .then((response) => {
      return (response.data[0])
    })
    .catch((error) => console.log(error.message));
};
export const fetchCorrect = async () => {
  return Axios
    .get(`${endpoint}/users/correct`)
    .then((response) => {
      return (response.data[0])
    })
    .catch((error) => console.log(error.message));
};

export const fetchCommunityQuestions = async () => {
  return Axios
    .get(`${endpoint}/questions/community`)
    .then((response) => {
      return (response.data)
    })
    .catch((error) => console.log(error.message));
};

export const fetchDataBaseQuestions = async (qId) => {
  return Axios
    .get(`https://opentdb.com/api.php?amount=10&category=${qId}`)
    .then((response) => {
      return (response.data.results)
    })
    .catch((error) => console.log(error.message));
};

export const fetchSubmittedByUser = async (id) => {
  return Axios
    .get(`${endpoint}/questions/submitted/${id}`)
    .then((response) => {
      return (response.data[0].count)
    })
    .catch((error) => console.log(error.message));
};


export const updateUserName = (id, name) => {
  return Axios
    .put(`${endpoint}/users/${id}/name`, name)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const updateUserEmail = (id, email) => {
  return Axios
    .put(`${endpoint}/users/${id}/email`, email)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const updateUserPw = (id, pw) => {
  return Axios
    .put(`${endpoint}/users/${id}/pw`, pw)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err.message)
    })
}