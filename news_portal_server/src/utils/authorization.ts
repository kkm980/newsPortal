import { Request, Response } from 'express';
// this function returns bearer token with authorization header in request 
function getToken(req:any) {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      return req.headers.authorization.split(" ")[1];
    } 
    return null;
}

export default getToken;