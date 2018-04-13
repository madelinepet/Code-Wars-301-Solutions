function validateUsr(username) {
  let res = /^[a-z0-9_]{4,16}$/g.test(username);
  return res;
}
validateUsr();