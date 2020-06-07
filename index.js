
const express = require('express')
const app = express()
const Port = process.env.PORT || 3000
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(Port, () => console.log(`port listen on ${Port}`));
// const AccessToken = require('twilio').jwt.AccessToken;
// const VoiceGrant = AccessToken.VoiceGrant;
// const VoiceResponse = require('twilio').twiml.VoiceResponse;
// const defaultIdentity = 'alice';
const callerId = 'client:quick_start';
const callerNumber = '+92022408099';


var accountSid = 'AC82135b13cbdc180941368218de6b871d'; // Your Account SID from www.twilio.com/console
var authToken = '692839ed542e05efc030000a600f5ff9';
var API_KEY = 'SK14ee448d0274d6d55d5df3b239231f69'
var API_KEY_SECRET = 'ktyBK8RgWndUdcEDRfvBYsBmSCB0tOXI'
const client = require('twilio')(accountSid, authToken);
console.log(client)
const VoiceResponse = require('twilio').twiml.VoiceResponse;

// app.get('/calling/generatetoken', (req, res) => {
//     try {
//         // Parse the identity from the http request
//         var identity = null;
//         if (req.method == 'POST') {
//             identity = req.body.identity;
//         } else {
//             identity = req.query.identity;
//         }

//         if (!identity) {
//             identity = defaultIdentity;
//         }
//         console.log(identity)
//         // Used specifically for creating Voice tokens
//         const pushCredSid = process.env.PUSH_CREDENTIAL_SID;
//         const outgoingApplicationSid = process.env.APP_SID;

//         // Create an access token which we will sign and return to the client,
//         // containing the grant we just created
//         const voiceGrant = new VoiceGrant({
//             outgoingApplicationSid: outgoingApplicationSid,
//             pushCredentialSid: pushCredSid
//         });


//         // Create an access token which we will sign and return to the client,
//         // containing the grant we just created
//         console.log("calling")
//         const token = new AccessToken(accountSid, API_KEY, API_KEY_SECRET);
//         token.addGrant(voiceGrant);
//         token.identity = identity;
//         // res.send();
//         console.log(token.toJwt())

//         res.status(200).json({ token: token.toJwt() });
//     } catch (error) {
//         console.log(error)
//         // next({ message: error });
//     }
// })
app.post('/calling/usercalling', (req, res, next) => {
    try {
        console.log('')
        client.calls
            .create({
                url: 'http://demo.twilio.com/docs/voice.xml',
                to: '+923022408099',
                from: '+923421232872'
            })
            .then(call => console.log(call.sid));
        res.status(200).json({ message: 'calling' });

        // let { VoiceResponse } = client.twiml;
        // const voiceResponse = new VoiceResponse();

        // const dial = voiceResponse.dial({ callerId: '03022408099' });
        // dial.number('03421232872');
        // console.log(voiceResponse.toString())
        // let paylaod = { ...req.body }

        // client.calls
        //     .create({
        //         url: 'http://demo.twilio.com/docs/voice.xml',
        //         to: `${paylaod.callToNumber}`,
        //         from: `${paylaod.callFromNumber}`
        //     })
        //     .then(call => {
        // res.status(200).json(voiceResponse.toString());
        //     });


    } catch (error) {
        console.log(error)
        // next({ message: error });
    }
})