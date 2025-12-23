function fearNotLetter(str) {
   const alphabetLetter = "abcdefghijklmnopqrstuvwxyz";

  const firstLetter = str[0];
  const lastLetter = str[str.length - 1];

  const positionOfFirstLatter = alphabetLetter.indexOf(firstLetter);
  const positionOfLastLatter = alphabetLetter.indexOf(lastLetter);

  const strSlice = alphabetLetter.slice(
    positionOfFirstLatter,
    positionOfLastLatter + 1
  );

  for (let i = 0; i < strSlice.length; i++) {
    if (!str.includes(strSlice[i])) {
      return strSlice[i];
    }
  }

  return undefined;
}

// Version alternative (non utilisée)
// Approche basée sur les codes ASCII avec charCodeAt

/*function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const currentCharCode = str.charCodeAt(i);
    console.log(currentCharCode);
    const nextCharCode = str.charCodeAt(i + 1);
    console.log(nextCharCode);

    if (nextCharCode !== currentCharCode + 1) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }
  return undefined;
}*/


console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));