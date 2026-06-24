import { ApiHelper } from "../../src/api/ApiHelper";
import { test, expect } from "../../src/fixtures/apifixtures";


const TOKEN = process.env.API_Token!;
const AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };
let userId: number;

test.describe.serial('running e2e go rest CRUD api tests', () => {



    test('GET API - get all users', async ({ apiHelper }) => {
        let response = await apiHelper.get('public/v2/users', AUTH_HEADER);
        console.log(response);
        expect(response.status).toBe(200);
    })

    test('POST API - get all users', async ({ apiHelper }) => {
        let userData = {
            name: "Pavan API",
            email: `autmation_${Date.now()}@open.com`,
            gender: "male",
            status: "active"
        };

        let response = await apiHelper.post('public/v2/users', userData, AUTH_HEADER);
        expect(response.status).toBe(201);
        expect(response.body.name).toBe(userData.name);
        userId = response.body.id;
        console.log('Created user Id is: ', userId);

    })


    test('PUT API - update user data', async ({ apiHelper }) => {
        let userUpdatedData = {
            name: "Pavan API_Updated",
            status: "inactive"
        };

        let response = await apiHelper.put(`public/v2/users/${userId}`, userUpdatedData, AUTH_HEADER);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe(userUpdatedData.name);
        expect(response.body.status).toBe(userUpdatedData.status);

    })

    test('DELETE API - delete user', async ({ apiHelper }) => {

        let response = await apiHelper.delete(`public/v2/users/${userId}`, AUTH_HEADER);
        expect(response.status).toBe(204);

    })
})


// There could be a problem if we run all at once because put is depended on the post call hence we need to execute sequencially
// one way - put all code in test.describe.serial();
// second way - recommended - need to write independent tests ex: for put call get data, create data, update data and get data

