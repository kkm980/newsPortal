async function passwordValid(password: string) {
  //  our function to check for specific password range, length and characters,
  // for now have kept it simple for test purpose
  if(password!=""){
    return false;
  }
  else{
    return true;
  }
};

export default passwordValid;