import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {

    const basePromptPrefix =
        `
Write me a well detailed and professional table of contents for an article with the title below.


Title: ${req.body.userInput}
`;

    console.log(`API: ${basePromptPrefix}`)

    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-002',
        prompt: `${basePromptPrefix}`,
        temperature: 0.8,
        max_tokens: 250,
    });

    const basePromptOutput = baseCompletion.data.choices.pop();

    console.log(`API: ${basePromptOutput.text}`)

    const secondPrompt =
        `
  Take the table of contents and title of the article below to generate a well summarized article. Kindly ensure that the article is well-constructed and concise. Explain each points in detail.

  Title: ${req.body.userInput}

  Table of Contents: ${basePromptOutput.text}

  Article:
  `
    const secondPromptCompletion = await openai.createCompletion({
        model: 'text-davinci-002',
        prompt: `${secondPrompt}`,
        temperature: 0.8,
        max_tokens: 1200,
    });

    const secondPromptOutput = secondPromptCompletion.data.choices.pop();

    res.status(200).json({ output: secondPromptOutput });
};

export default generateAction;