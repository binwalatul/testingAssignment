module.exports = {
    getAccessToken() {
        return cy.request({
          method: 'POST',
          url: '/auth', // Replace with the actual endpoint URL
          body: {
            // If you need to send any request payload, define it here
            // For example:
            username: 'admin',
            password: 'password123'
          }
        }).then(response => {
          // Assuming the access token is returned in the response body
          const accessToken = response.body.token;
          return accessToken;
        });
      }      
}