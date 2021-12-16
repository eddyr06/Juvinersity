import jwt, { decode } from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    //getting token from the frontend, token always comes in the first position of the array after split
    const token = req.headers.Authorization.split(" ")[1];
    //if token is less than 500 it is from back end, if more its google
    const isCustomAuth = token.length < 500;

    //data we are getting from token
    let decodedData;

    //verifying if this is backend token
    if (token && isCustomAuth) {
      //this is going to give us the email and id from the token
      decodedData = jwt.verify(token, process.env.SECRET);

      //storing his ID so we can audit it
      req.userId = decodedData?.id;
    }
    //verifying if this is google token
    else {
      //decoding the token and passing only token, not secret
      decodedData = jwt.decode(token);

      //sub is google's unique user ID
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {}
};

export default auth;
