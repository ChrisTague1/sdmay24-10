import type { Actions } from './$types';
import * as tf from '@tensorflow/tfjs';

export const actions = {
	default: async ({request, fetch}) => {
        // const model = await tf.loadLayersModel('/model_4/model.json', {
        //     fetchFunc: fetch
        // });
        const formData = await request.formData();
        const file = formData.get('cancerFile') as File;
        const text = await file.text();
        const data = text
            .split(/[\s,]+/)
            .filter((_, i) => i & 1)
            .map(Number);

        const response = await fetch("https://6vn3gamps6.execute-api.us-east-2.amazonaws.com/default/model_9_runner", {
            method: 'POST',
            body: JSON.stringify({
                data
            })
        });
        const lambdaData = await response.json();
        console.log(lambdaData);

        // const tensor = tf.tensor([data]);
        // const prediction = model.predict(tensor) as tf.Tensor<tf.Rank>;
        // const result = prediction.arraySync() as number[][];
        //
        // return {prediction: result[0][0]};
        return {prediction: "a very short number of"};
	},
} satisfies Actions;
