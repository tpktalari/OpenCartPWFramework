// schema: type of response data
// ajv --> nodule library fro teh schema validation.
// npm install ajv


import { test, expect } from "../../src/fixtures/apifixtures";
import Ajv from 'ajv';

const TOKEN = process.env.API_Token!;
const AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };

//setup AJV
let ajv = new Ajv();

//define schema
let userSchema = {
    "type": "object",
    "properties": {
        "id": {
            "type": "integer"
        },
        "name": {
            "type": "string"
        },
        "email": {
            "type": "string",
        },
        "gender": {
            "type": "string"
        },
        "status": {
            "type": "string"
        }
    },
    "required": [
        "id",
        "name",
        "email",
        "gender",
        "status"
    ]
}


let userArraysSchema = {

    "type": "array",
    "items": userSchema
}



test('GET User', async ({ apiHelper }) => {

    let userData = {
        name: "Schema TEst",
        email: `autmation_${Date.now()}@open.com`,
        gender: "male",
        status: "active"
    };
    // create user
    let createResponse = await apiHelper.post('public/v2/users', userData, AUTH_HEADER);
    let userId = createResponse.body.id;

    //get a user
    let getUserRes = await apiHelper.get(`public/v2/users/${userId}`, AUTH_HEADER);
    expect(getUserRes.status).toBe(200);

    //Schema validation code:
    let validate = ajv.compile(userSchema);
    let isSchemaValid = validate(getUserRes.body);

    if (!isSchemaValid) {
        console.log('Schema error: ', validate.errors);
    }

    // expect(isSchemaValid).toBeTruthy();

})





test('GET all Users', async ({ apiHelper }) => {

    //get a user
    let getUsersRes = await apiHelper.get('public/v2/users', AUTH_HEADER);
    expect(getUsersRes.status).toBe(200);

    //Schema validation code:
    let validate = ajv.compile(userArraysSchema);
    let isSchemaValid = validate(getUsersRes.body);

    if (!isSchemaValid) {
        console.log('Schema error: ', validate.errors);
    }

    expect(isSchemaValid).toBeTruthy();

})