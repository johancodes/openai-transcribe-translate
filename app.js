//// MODULES, API KEY (JL's) ////

const fs = require("node:fs")
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '',
  ////
}); 

const openai = new OpenAIApi(configuration);


//// TRANSCRIBE INTO LANGUAGE OF INPUT AUDIO - LOCAL DIR ////

async function transcribeMe() {
const resp = await openai.createTranscription(
    fs.createReadStream("/Users/joellim/Desktop/coda_work_mac_2022/openai-project-2/transcribe-translate/sample-audio-6.mp3"),
    "whisper-1",
    "",
    "",
    "0.2"
    //positional params from: https://platform.openai.com/docs/api-reference/audio/create
);
console.log(resp.data.text, '\n')
}

transcribeMe()


//// TRANSLATE INPUT AUDIO - LOCAL DIR - TO ENGLISH (ONLY) AND TRANSCRIBE IT ////

async function translateMe() {
const resp = await openai.createTranslation(
    fs.createReadStream("/Users/joellim/Desktop/coda_work_mac_2022/openai-project-2/transcribe-translate/sample-audio-6.mp3"),
    "whisper-1",
    "",
    "",
    "0.2"
   //positional params from: https://platform.openai.com/docs/api-reference/audio/create
);
console.log(resp.data.text, '\n')
}

translateMe()

