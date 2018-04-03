import axios, { AxiosResponse } from 'axios';

export default (url: string, data?: object) => new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: `${window.location.protocol}//${window.location.hostname}:3010${url}`,
    data,
  }).then((response: AxiosResponse) => {
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject(new Error('network error'));
    }
  }).catch((error: Error) => {
    reject(error.toString());
  });
});
