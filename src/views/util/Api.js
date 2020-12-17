import axios from "axios";
//export const API_URL = "http://localhost:3334/";
export const API_URL = "http://848251d83377.ngrok.io/";
// export const API_URL =
//   "http://ec2-18-216-193-215.us-east-2.compute.amazonaws.com:3334/";
//
export const registerUser = (data) => {
  // return axios
  //   .post(API_URL + "users/signup", data)
  //   .then((response) => {
  //     // let data = res.data;
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.warn("Not good man :(");
  //   });
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  return axios.post(API_URL + "users/signup", data).then(
    function (res) {
      let data = res.data;
      return data;
    }.bind(this)
  );
};
export const loginUser = (data) => {
  return axios.post(API_URL + "signin", data).then(
    function (res) {
      let data = res.data;
      return data;
    }.bind(this)
  );
};

export const getProfile = (data) => {
  console.log(data);
  return axios.post(API_URL + "users/profile", data).then(
    function (res) {
      let data = res.data;
      return data;
    }.bind(this)
  );
};

export const editProfile = (data) => {
  return axios.post(API_URL + "users/profile/edit", data).then(
    function (res) {
      let data = res.data;
      return data;
    }.bind(this)
  );
};

export const uploadVideo = (data, token) => {
  console.log(token);
  const config = {
    headers: { authorization: token },
  };
  return axios.post(API_URL + "videos/send", data, config).then(
    function (res) {
      let data = res.data;
      return data;
    }.bind(this)
  );
};
