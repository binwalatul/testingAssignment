import { getAccessToken } from "../support/helper/getToken";

describe("All bookings", () => {
  it("get all the bookings", () => {
    getAccessToken().then((token) => {
      cy.request({
        method: "GET",
        url: "/booking",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.greaterThan(0);
      });
    });
  });
});
