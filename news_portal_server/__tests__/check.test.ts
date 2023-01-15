import {describe, expect, test} from '@jest/globals';
// import {sum} from './sum';

const sum=(a:any,b:any)=>{
    return a+b;
}
describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
// import app from '.././src/app';
// // const app=require('.././src/app');

// const request = require('supertest');
// const assert = require('assert');
// const express = require('express');

// it('returns message No user found', async () => { 
//     const response = await request(app)
//         .post('/user/login')
//         .send({ email:"john",
//             password:"Kant" })
//         .expect(202);

//     expect(response.body.data).toBeDefined();
// });


// it("returns a list of errors when any of the fields are missing", async () => { 
//     const response = await request(app)
//         .post('/auth/login')
//         .send({ })
//         .expect(500);
    
//     expect(response.body.errors).toBeDefined();
// });


// it('returns a list of errors if any of the fields are empty', async () => { 
//     const response = await request(app)
//         .post('/auth/login')
//         .send({ email:"Krishna"})
//         .expect(500);

//     expect(response.body.errors).toBeDefined();
// });


// it('returns a list of errors if any of the fields are empty', async () => { 
//     const response = await request(app)
//         .post('/auth/login')
//         .send({ password:"Krishna"})
//         .expect(500);

//     expect(response.body.errors).toBeDefined();
// });


// describe("POST /auth/login",()=>{

//     describe("given a username and password", ()=>{
//         test("should respond with 200 status code", async()=>{
//             const response=await request(app).post("/auth/login").send({
//                 email:"email",
//                 password:"password"
//             })
//             expect(response.statusCode).tobe(200)
//         })
//     })
// })


// describe("Test example", () => {
//     // test("POST /auth/login", (done) => {
//     //     request(app)
//     //         .post("/auth/login")
//     //         .expect("Content-Type", /json/)
//     //         .send({
//     //             email: "francisco@example.com",
//     //         })
//             // .expect(500)
//     //         .expect((res) => {
//     //             // "All required fields are not present",
//     //             res.body="All required fields",
//     //             // res.body.data[0].email = "test@example.com";
//     //             // res.body.data[1].email = "francisco@example.com";
//     //         })
//     //         .end((err, res) => {
//     //             if (err) return done(err);
//     //             // elementId = res.body.data[1].id;
//     //             return done();
//     //         });
//     // });
//     // More things come here
//     // test("should respond with 500 status code for this POST /auth/login request", async ()=>{
//     //    const resp=await request(app).post('/auth/login').send({
//     //     password:"abc"
//     // })
//     // expect(resp.statusCode).toBe(200);
//     // });

//     it('should respond with 200 status code for this POST /auth/signup request', function(done) {
//         request(app)
//           .post('/auth/register')
//           .send({
//             username:"abcd",
//             email:"Gautami@gmail.com",
//             password:"abc"
//           })
//           .set('Accept', 'application/json')
//           .expect(function(res) {
//             res.body.username = 'abc';
//             res.body.allp="there"
//             // this will modify the response object
//           })
//           .expect(200, {
//             name: 'Gautam@gmail.com',
//             username: 'abcd',
//             password:'abc',
//             allp:"m"
//           }, done);
//       });
    
// });