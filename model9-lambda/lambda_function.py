import json
import tensorflow as tf

model = tf.keras.models.load_model("model_9.keras")


def lambda_handler(event, context):
    """
    event.body.data must be a list of the 2449 data points that the model needs
    """
    input_data = json.loads(event['body'])['data']
    predictions = model.predict(tf.constant([input_data]))
    print(predictions)
    response = {
        'statusCode': 200,
        'body': json.dumps({'predictions': str(predictions[0][0])})
    }
    return response
