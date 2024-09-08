
// const{configuration , Openapi} = require('openai');
// const configuration = new configuration({apikey: "https://api.openai.com/v1/chat/completions "});
// const openai = new Openapi(configuration);

// export async function sendmsgtoopenai(message){
//     const res = await openai.createcompletion({
//         Model: 'text-davinci-003',
//         prompt:message,
//         temperrature:0.7 ,
//         max_tokens:256 , 
//         top_p:1,
//         frequency_penalty:0,
//         presence_penalty:0
        
//     });
//     return res.data.choices[0].text;
// }