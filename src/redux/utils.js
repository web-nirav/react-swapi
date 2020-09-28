import axios from "axios";

let API_URL = "https://swapi.dev/api/";

export const commonApi = (
  apiUrl,
  data = null,
  method = "GET",
  auth = false
) => {
  let url = API_URL + apiUrl;
  let headers = { "Content-Type": "application/json" };

  return new Promise((resolve, reject) => {
    axios({ method, url, headers, data })
      .then((response) => {
        if (url.includes("users/login") && response === undefined) {
          resolve(response);
        }
        if (response && response.status === 422) {
          let Data = { data: response.data, status: response.status };
          resolve(Data);
        }
        if (response && response.status === 200) {
          let Data = { data: response.data, status: response.status };
          resolve(Data);
        }
        if (response && response.status === 201) {
          let Data = { data: response.data, status: response.status };
          resolve(Data);
        }
        if (response && response.status === 401) {
          let Data = { data: response.data, status: response.status };
          resolve(Data);
        }
        if (response && response.status === 400) {
          let Data = { data: response.data, status: response.status };
          resolve(Data);
        } else if (response && response.status === 404) {
          let Data = { data: response.data, status: response.status };
          resolve(Data);
        } else {
          //  showErrorToast("Something went wrong...! ")
        }
      })
      .catch((error) => {
        console.log("error is ", error);
        reject(error);
      });
  });

  /* axios({ method, url, headers, data })
    .then((res) => res.json())
    .catch((error) => {
      console.error("error from api call", error);
      return error;
    }); */
};
