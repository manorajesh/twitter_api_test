import { TwitterApi } from 'twitter-api-v2';
import fetch from 'node-fetch';

async function fetchPi(n: number) {
    try {
    const response = await fetch(`https://api.pi.delivery/v1/pi?start=${n}&numberOfDigits=1`);
    const data = await response.json();
    console.log(data.content);
    } catch (error) {
    console.error('Error:', error);
    }
}
  

// OAuth 1.0a (User context)
const userClient = new TwitterApi({
    appKey: '--',
    appSecret: '--',
    accessToken: '--',
    accessSecret: '--',
});

let clientV2 = userClient.v2;

fetchPi(2);

// console.log(digit)

// clientV2.tweet("pi!").then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })