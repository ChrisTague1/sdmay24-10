from lambda_function import lambda_handler
import json


def main():
    data = []
    with open("sample4129.csv", "r") as sample:
        lines = sample.readlines()
        for line in lines:
            _, num = line.split(",")
            data.append(float(num))

    event = {
        "body": json.dumps({
            "data": data
        })
    }
    response = lambda_handler(event, 0)
    print(response)


if __name__ == "__main__":
    main()
