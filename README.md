# Serverless Service Deployment

## Prerequisites

Before deploying the serverless service, ensure you have the following installed:
- [Node 18](https://nodejs.org/en/download/package-manager/)
- [Yarn](https://yarnpkg.com/)
- [AWS CLI](https://aws.amazon.com/cli/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/omaralex/kata-api-swapi
   cd kata-api-swapi

2. **Install dependencies using Yarn:**

    ```bash
    yarn install

## AWS Profile Configuration

1. **Configure your AWS profile:**

    Make sure you have an AWS profile set up with the required permissions. The profile should be named prod_profile. You can configure it using the AWS CLI:
    ```bash
    aws configure --profile prod_profile
    ```
    Follow the prompts to enter your AWS Access Key ID, Secret Access Key, region, and output format.

## Deployment
To deploy the serverless service, run the following command:

```bash
yarn run deploy
```

This will deploy the service using the prod_profile AWS profile.

## API Documentation
After deployment, you can review the available API endpoints at the following URL:
```bash
/api/docs
```
Visit this endpoint to access the API documentation and explore the available endpoints and their usage.

## Disclamer

The recovery of data from Dynamo is throught the method scan whose performance for long table isn't optimal, but for 
code testing purposes it is practical.

## Lambdas Examples
  GET (Get all the data saved in Dynamo):
  
  https://pz0mzqtvb2.execute-api.us-east-2.amazonaws.com/api/personas

  POST (Insert the data to Dynamo):
  
  https://pz0mzqtvb2.execute-api.us-east-2.amazonaws.com/api/personas

  GET (API Documentation):
  
  https://pz0mzqtvb2.execute-api.us-east-2.amazonaws.com/api/docs
  
  GET (Integration with API Swapi for endpoint people):

  GET - https://pz0mzqtvb2.execute-api.us-east-2.amazonaws.com/swapi/people/:id
  

