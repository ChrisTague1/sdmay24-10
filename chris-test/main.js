const URL = "https://898ap5lxpl.execute-api.us-east-2.amazonaws.com/default/model_9";

async function chris() {
    const response = await fetch(URL, {
        method: "POST"
    });
    const data = await response.json();

    return data;
}

chris().then(console.log).catch(console.log)
