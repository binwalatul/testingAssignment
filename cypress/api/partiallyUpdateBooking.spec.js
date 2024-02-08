import { getAccessToken } from "../support/helper/getToken";
import { updateBooking } from "../support/mockPayload/partialUpdateBooking";
import { updateResponse } from "../support/mockResponse/partialUpdateResponse";
let getBookingId;

describe("Partially update booking", () => {
  it("get and update a booking partially", () => {
    getAccessToken().then((token) => {
      cy.request({
        method: "GET",
        url: "/booking",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.request({
          method: "PATCH",
          url: `/booking/${response.body[0].bookingid}`,
          headers: {
            Authorization: `Bearer ${token}`,
            Cookie: `token=${token}`,
          },
          body: updateBooking,
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.firstname).to.equal(updateResponse.firstname);
          expect(response.body.lastname).to.equal(updateResponse.lastname);
        });
      });
    });
  });
});
