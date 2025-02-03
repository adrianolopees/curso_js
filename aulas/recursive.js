function contaNum(max) {
  if (max >= 10) return;
  max++
  console.log(max)
  contaNum(max)
}
contaNum(0)