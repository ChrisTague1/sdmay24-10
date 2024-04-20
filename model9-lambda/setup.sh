#!/bin/bash

# Create a new directory for the Lambda package
mkdir lambda_package
cd lambda_package

# Install the required dependencies inside the lambda_package directory
pip3 install numpy tflite_runtime -t .

# Copy the lambda_function.py file and the model9.tflite file into the lambda_package directory
cp ../lambda_function.py .
cp ../model9.tflite .

# Create a ZIP archive of the lambda_package directory
zip -r ../lambda_package.zip .

# Clean up the temporary lambda_package directory
cd ..
rm -rf lambda_package
