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