import supertest from "supertest";
import * as server from "./server";

const agent = supertest.agent(server.app);

describe("User tests", () => {
  beforeAll((done) => {
    server.start(done);
  });

  test("Create", (done) => {
    const user = { name: "Test User" };
    agent
      .post("/users")
      .send(user)
      .expect(200)
      .end((err, res) => {
        console.log(res.text);
        done();
      });
  });

  afterAll((done) => {
    server.stop(done);
  });
});
