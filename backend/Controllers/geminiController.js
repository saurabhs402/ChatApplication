const { GoogleGenerativeAI } = require("@google/generative-ai");

const generateResponse=async function(req,res){

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);


    apiCallPromise = new Promise((resolve, reject) => {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = "A single sentence response that the user is busy please text him later"

        const resultPromise = model.generateContent(prompt);

        // Set a timeout for the API call (10 seconds)
        const timeoutId = setTimeout(() => {
            reject(new Error("API call timed out"));
        }, 10000); // 10 seconds timeout

        // When the result is ready, clear the timeout and resolve the promise
        resultPromise.then((result) => {
            clearTimeout(timeoutId);
            resolve(result);
        }).catch((error) => {
            clearTimeout(timeoutId);
            reject(error);
        });
    });




       try{

        
        // For text-only input, use the gemini-pro model
        // const model = genAI.getGenerativeModel({ model: "gemini-pro" });

       

        const result = await Promise.race([apiCallPromise]);
        const response = await result.response;
        const text = response.text();

        res.status(200).json({
            status:"success",
            text
        })

       }catch(err){

          res.status(200).json({
            status:"success",
            text:"User is Unavailable"
          })
       }
        
    

}

module.exports={generateResponse}