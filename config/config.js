module.exports = {
  // BASEURL: "https://fea-backend.herokuapp.com",
  BASEURL: "http://localhost:8080",

  email: {
    EMAILUSERNAME: "vansh.frontendarmy@gmail.com",
    EMAILPASSWORD: "itdurvloxvlukyeq",
    SENDMAILFROM: "vansh.frontendarmy@gmail.com",
  },
  mogno: {
    MONGO_USERNAME: "prince",
    MONGO_PASSWORD: "prince123",
    MONGO_DBNAME: "PMS",
    MONGO_HOST: "cluster0.33xh5pn.mongodb.net",
  },

  emailSubject: {
    welcome: "Welcome to our System",
    email_Changed: "Your email has been updated",
    password_Changed: "Password updation link",
    order_confirmation: "Order confirmation ",
  },

  jwt: {
    JWTSECRETKEY: "BACKEND$frontendarmy@2002",
    JWTEXPIRY: "1h",
  },
};
