
const csvUrl = 'http://localhost:8080/sample5062_input.csv'; 

async function loadModel(){

    return tf.loadLayersModel('/tfjs_files/model.json');
}

async function runModel(){

    // const csvData = tf.data.csv(
    //     csvUrl, {
    //         hasHeader: true,        
    //     columnConfigs: {       
    //     },
    // });

    const csvData = tf.data.csv(csvUrl);
    console.log(csvData);

    const dataArr = await csvData.toArray();
    console.log(dataArr.length);
    // const tensor = tf.tensor(dataArr, [1, dataArr.length], dtype = tf.float16);
    const tensor = tf.tensor(dataArr, [1, dataArr.length]);
    
    const model = await loadModel();

    //model.predict(tensor);
    prediction = model.predict(tensor);
    const result = prediction.dataSync();
    console.log(result[0]);
}
window.onload = runModel;
