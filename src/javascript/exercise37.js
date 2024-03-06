// import * as JSONbig from 'json-bigint{"storeAsString": true}'
var JSONbigString = require('json-bigint')({ storeAsString: true });
// javascript
const response = "{\"channel\":{\"Items\":[{\"photo\":\"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8ad22b80b299465bf907f4cd08ac2acc~c5_168x168.jpeg?x-expires=1702839600&x-signature=xjSNGYCe07%2BAgPSO1zKhmkTfi04%3D\",\"created_at\":1702669949152,\"indicators\":{\"inf\":{\"value\":3000,\"created_at\":1702669948735},\"efa\":{\"value\":80,\"created_at\":1702669948735},\"tac\":{\"value\":60000,\"created_at\":1702669948735},\"tmo\":{\"value\":1200000,\"created_at\":1702669948735},\"tpr\":{\"value\":300000,\"created_at\":1702669948735},\"tmr\":{\"value\":300000,\"created_at\":1702669948735},\"created_at\":1702669948735,\"nso\":{\"value\":80,\"created_at\":1702669948735},\"tmc\":{\"value\":1200000,\"created_at\":1702669948735},\"nsr\":{\"value\":80,\"created_at\":1702669948735}},\"team_id\":\"b42e5af4-d311-4599-838d-c15a2fe8e202\",\"openid\":\"-0007sJl0nXT-pw7dHER2utqlNU_YXdjcqY_\",\"name\":\"ＫＩＲＢＹ\",\"updated_at\":1703090534241,\"refresh_token_expires_in\":31536000,\"accessTokenExpiresIn\":86400,\"refresh_token\":\"rft.EJfuH3FheIldqGvKtY5capbrKBsS2r93DkRsLJgPI4Ev9eowm29zm49JomPa!6487\",\"username\":\"gordoyuka\",\"id\":\"13_-0007sJl0nXT-pw7dHER2utqlNU_YXdjcqY_\",\"accessToken\":\"act.qq5WswOkvV5qGJToXI8OpcWzXrjEUT6BjWF8eWI3bnyd4qmmnS5rEtdV0MXm!6470.va\",\"type\":13}]}}";

var json = '{ "value" : 9223372036854775807, "v2": 123 }';

console.log('\n\nbig number JSON:');
var r1 = JSONbigString.parse(response.content);
console.log(r1);



