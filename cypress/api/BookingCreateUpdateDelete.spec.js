import { getAccessToken } from "../support/helper/getToken";
import { createBooking } from "../support/mockPayload/postBooking";
import { postResponse } from "../support/mockResponse/postResponse";
import { updateBooking } from "../support/mockPayload/updateBooking";
import { updateResponse } from "../support/mockResponse/updateResponse";

let storeBookingId;
describe("POST UPDATE and DELETE booking", () => {
  it("post new bookings", () => {
    getAccessToken().then((token) => {
      cy.request({
        method: "POST",
        url: "/booking",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: createBooking,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.bookingid).to.match(/^\d+$/);
        storeBookingId = response.body.bookingid;
        delete response.body.bookingid;
        expect(response.body).to.deep.equal(postResponse);
      });
    });
  });
  it("update the booking", () => {
    getAccessToken().then((Token) => {
      cy.request({
        method: "PUT",
        url: `/booking/${storeBookingId}`,
        headers: {
          Authorization: `Bearer ${Token}`,
          Cookie: `token=${Token}`,
        },
        body: updateBooking,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.equal(updateResponse);
      });
    });
  });
  it("delete the booking", () => {
    getAccessToken().then((Token) => {
      cy.request({
        method: "DELETE",
        url: `/booking/${storeBookingId}`,
        headers: {
          Authorization: `Bearer ${Token}`,
          Cookie: `token=${Token}`,
        },
        body: updateBooking,
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
});
