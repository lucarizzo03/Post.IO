const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: 'API_KEY'
});

// generates text
const generateMeta = async(req, res) => {
    const { post } = req.body;

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": `Create a caption for a post about ${post}, with not hashtags`}],
        max_tokens: 500
    });

    
    const tags = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": `Create hashtags for a post about ${post}`}],
        max_tokens: 500
    });


    res.status(200).json({
        description: chatCompletion.choices[0].message.content,
        tags: tags.choices[0].message.content,
    });
    
};


// generates images 
const generateImage = async(req, res) => {
    const { prompt } = req.body;
    
    const image = await openai.images.generate({
        prompt: prompt,
        n: 1,
        size: '512x512'
    })

    const imgUrl = image.data[0].url;

    res.status(200).json({
        url: imgUrl
    })


}

// runs it 
module.exports = { generateMeta, generateImage };
