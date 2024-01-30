/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
Return '12:01:00'.
Return '00:01:00'.

Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):
string s: a time in  hour format

Returns
string: the time in  hour format

Input Format
A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints
All input times are valid
*/
function timeConversion(s) {
  if (typeof s !== "string") {
    return null;
  }

  const period = s.slice(-2);
  let hours = parseInt(s.slice(0, 2), 10);

  if (period === "AM" && hours === 12) {
    // Handle special case: 12:00:00 AM should be converted to 00:00:00
    hours = 0;
  } else if (period === "PM" && hours !== 12) {
    // Handle PM hours (other than 12)
    hours += 12;
  }

  const militaryTime = `${String(hours).padStart(2, "0")}:${s.slice(
    3,
    5
  )}:${s.slice(6, 8)}`;
  return militaryTime;
}

// Example usage:
const militaryTime = timeConversion("08:45:30PM");
console.log(militaryTime); // Output: 20:45:30
