const otpNumber = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return numbers.sort(() => Math.random() - 0.5).slice(0,4).join("")

};
export default otpNumber;
