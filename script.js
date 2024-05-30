function firstWord(s) {
  // your code here
	if (s === "") {
    return "";
  }

  let trimmedStr = s.trim();
  let firstSpaceIndex = trimmedStr.indexOf(' ');

  if (firstSpaceIndex === -1) {
    return trimmedStr;
  }

  return trimmedStr.slice(0, firstSpaceIndex);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
