import supertest from "supertest";
import * as server from "./server";
import IUser from "../common/IUser";

const agent = supertest.agent(server.app);

describe("User tests", () => {
  beforeAll((done) => {
    server.start(done);
  });

  const expectUser = (user: IUser) => {
    expect(user).not.toBeNull();
    expect(user).toHaveProperty("_id");
    expect(user).toHaveProperty("name");
  };

  test("Create", (done) => {
    const user: IUser = { _id: null, name: "Test User" };
    agent
      .post("/users")
      .send(user)
      .expect(200)
      .end((err, res) => {
        expectUser(res.body);
        done();
      });
  });

  test("Get all", (done) => {
    agent
      .get("/users")
      .send()
      .expect(200)
      .end((err, res) => {
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
        res.body.forEach((user: IUser) => expectUser(user));
        done();
      });
  });

  afterAll((done) => {
    server.stop(done);
  });
});
