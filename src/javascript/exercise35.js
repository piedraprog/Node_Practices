import axios from "axios";

// conseguir autorización de tiktok usando la api business


// let data = JSON.stringify({
//   client_id: "",
//   client_secret: "",
//   grant_type: "refresh_token",
//   refresh_token:
//     "rft.EJfuH3FheIldqGvKtY5capbrKBsS2r93DkRsLJgPI4Ev9eowm29zm49JomPa!6487",
// });

// let config = {
//   method: "post",
//   maxBodyLength: Infinity,
//   url: "https://business-api.tiktok.com/open_api/v1.3/tt_user/oauth2/refresh_token/",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   data: data,
// };

// axios
//   .request(config)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Configuración de los datos para la solicitud del token de acceso


const refresh = async () => {

  const clientId = "";
  const clientSecret = "";
  
  const channel = {"photo":"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8ad22b80b299465bf907f4cd08ac2acc~c5_168x168.jpeg?x-expires=1702065600&x-signature=mUOgJGHrErSRIhNEUNc0qTxelqI%3D","created_at":1701892824996,"indicators":{"inf":{"value":3000,"created_at":1701892824497},"efa":{"value":80,"created_at":1701892824497},"tac":{"value":60000,"created_at":1701892824497},"tmo":{"value":1200000,"created_at":1701892824497},"tpr":{"value":300000,"created_at":1701892824497},"tmr":{"value":300000,"created_at":1701892824497},"created_at":1701892824497,"nso":{"value":80,"created_at":1701892824497},"tmc":{"value":1200000,"created_at":1701892824497},"nsr":{"value":80,"created_at":1701892824497}},"team_id":"b42e5af4-d311-4599-838d-c15a2fe8e202","openid":"-0007sJl0nXT-pw7dHER2utqlNU_YXdjcqY_","name":"ＫＩＲＢＹ","updated_at":1701892824996,"refresh_token_expires_in":31536000,"accessTokenExpiresIn":86400,"refresh_token":"rft.EJfuH3FheIldqGvKtY5capbrKBsS2r93DkRsLJgPI4Ev9eowm29zm49JomPa!6487","id":"13_-0007sJl0nXT-pw7dHER2utqlNU_YXdjcqY_","accessToken":"act.wjeJkfOu5FKwkPyzXnZfRbX1h1lNyW27y1tdVvBZEfaveVxCifKp7JSykTCK!6538.va","type":13}
  

  const refreshToken = "rft.EJfuH3FheIldqGvKtY5capbrKBsS2r93DkRsLJgPI4Ev9eowm29zm49JomPa!6487";
  
  const url = "https://business-api.tiktok.com/open_api/v1.3/tt_user/oauth2/refresh_token/";
  
  const dataConsulta = {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "refresh_token",
    refresh_token: channel.refresh_token,
  }
  
  const respuesta = await axios.post(url, dataConsulta, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.error(error);
      return error
    });
  
  return await respuesta
}


const main = async() => {
  refresh().then((data)=>{
    console.log(data.data)
  })
}



main()