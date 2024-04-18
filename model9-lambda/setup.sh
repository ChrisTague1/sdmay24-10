#!/bin/bash

pip3 install -r requirements.txt -t package

cp lambda_function.py ./package/
cp model_9.keras ./package/

cd package
zip -r ../deployment_package.zip .
cd ..

rm -rf ./package
