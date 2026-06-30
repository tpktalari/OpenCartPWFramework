// import { test, expect } from "../../src/fixtures/apifixtures";

// const TOKEN = process.env.API_Token!;
// const AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };

// // helper - generi function - creae fresh user

// async function createUser(apiHelper: any) {

//     let userData = {
//         name: "Pavan API",
//         email: `autmation_${Date.now()}@open.com`,
//         gender: "male",
//         status: "active"
//     };

//     let response = await apiHelper.post('public/v2/users', userData, AUTH_HEADER);
//     expect(response.status).toBe(201);
//     return await response.body;
// }

// // Test 1: Create User + Verify (AAA patern)

// test('POST - create a user', async ({ apiHelper }) => {
//     // create a user: 
//     let userResponse = await createUser(apiHelper);

//     // get the user:
//     let response = await apiHelper.get(`public/v2/users/${userResponse.id}`, AUTH_HEADER);
//     expect(response.status).toBe(200);
//     expect(response.body.name).toBe("Pavan API");
// })

// // Test 2: Update a user + Verify (AAA patern)
// // POST -- UserID -- PUT --GET -- /userId --verify

// test('PUT - update a user', async ({ apiHelper }) => {

//     let userUpdatedData = {
//         name: "Pavan API_Updated",
//         status: "inactive"
//     };

//     // create a user: 
//     let userResponse = await createUser(apiHelper);

//     // update user the user:
//     let response = await apiHelper.put(`public/v2/users/${userResponse.id}`, userUpdatedData, AUTH_HEADER);
//     expect(response.status).toBe(200);
//     expect(response.body.name).toBe(userUpdatedData.name);
//     expect(response.body.status).toBe(userUpdatedData.status);

//     // get the user:
//     let getResponse = await apiHelper.get(`public/v2/users/${userResponse.id}`, AUTH_HEADER);
//     expect(getResponse.status).toBe(200);
//     expect(getResponse.body.name).toBe(userUpdatedData.name);
//     expect(getResponse.body.status).toBe(userUpdatedData.status);
// })

// // Test 3: Dellete a user + Verify (AAA patern)
// // POST -- UserID -- Delete --GET -- /userId --verify
// //Delete

// test('Delete - update a user', async ({ apiHelper }) => {

//     // create a user: 
//     let userResponse = await createUser(apiHelper);

//     // update user the user:
//     let response = await apiHelper.delete(`public/v2/users/${userResponse.id}`, AUTH_HEADER);
//     expect(response.status).toBe(204);

//     // get the user:
//     let getResponse = await apiHelper.get(`public/v2/users/${userResponse.id}`, AUTH_HEADER);
//     expect(getResponse.status).toBe(404);
//     expect(getResponse.body.message).toBe("Resource not found")
// })