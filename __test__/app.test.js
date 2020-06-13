import supertest from "supertest";
import { app, server } from "../app.mjs";

describe("Test the API's", () => {
    afterAll(async () => {
        await server.close();
    });

    it("tests search API", async () => {
        const response = await supertest(app).get(
            "/api/location/search/?query=shanghai"
        );
        expect(response.status).tobe(200);
    });
});