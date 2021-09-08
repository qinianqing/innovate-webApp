/*
 * @Description:
 * @Author: 惜神
 * @Date: 2021-08-22 11:52:59
 */
const price = (amount) => {
  const money = Number(amount).toFixed(0)
  return `￥${money}`
}

export default {
  price
}
