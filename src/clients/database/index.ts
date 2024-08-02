import { DynamoDB } from 'aws-sdk';

let dynamoDb: any = null;

const dataBase = {
  getInstance: () => {
    if (!dynamoDb) {
      dynamoDb = new DynamoDB.DocumentClient();
    }

    return {
      insert: async <T>(payload: Record<string, T>) => {
        if (!dynamoDb) {
          throw new Error("Database instance not initilized")
        }

        const params = {
          TableName: 'SwapiTable',
          Item: {
            ...payload
          }
        };

        return dynamoDb.put(params).promise();
      },
      getAll: async () => {
        if (!dynamoDb) {
          throw new Error("Database instance not initilized")
        }

        const params = {
          TableName: 'SwapiTable'
        };

        const result = await dynamoDb.scan(params).promise();

        if (!result.Items) {
          throw new Error(`Empty results`);
        }
      
        return result.Items;
      }
    };
  }
}

export default dataBase;