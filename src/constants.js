/* eslint-disable no-unused-vars */
var temp = "";
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== "production") {
  temp = "http://127.0.0.1:8000";
} else {
  temp = "https://ca.elan.org.in";
}
export const hostname = `${temp}`;
export const caportal = `${hostname}/caportal`;
