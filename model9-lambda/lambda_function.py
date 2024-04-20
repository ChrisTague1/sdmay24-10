import json
import numpy as np
import tflite_runtime.interpreter as tflite

# Load the TensorFlow Lite model
interpreter = tflite.Interpreter(model_path="model9.tflite")
interpreter.allocate_tensors()

# Get input and output details
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

def lambda_handler(event, context):
    """
    event.body.data must be a list of the 2449 data points that the model needs
    """
    input_data = json.loads(event['body'])['data']
    
    # Convert input data to FLOAT32
    input_data = np.array(input_data, dtype=np.float32)
    
    # Set the input tensor
    input_shape = input_details[0]['shape']
    input_data = np.reshape(input_data, input_shape)  # Reshape input data to match the expected shape
    interpreter.set_tensor(input_details[0]['index'], input_data)
    
    # Run the inference
    interpreter.invoke()
    
    # Get the output tensor
    output_data = interpreter.get_tensor(output_details[0]['index'])
    
    response = {
        'statusCode': 200,
        'body': json.dumps({'predictions': str(output_data[0][0])})
    }
    
    return response
