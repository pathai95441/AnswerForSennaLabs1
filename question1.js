function profit(n) {
  return (n.sell_price - n.cost_price) * n.inventory
}
const re = profit({"cost_price": 225.89,
        "sell_price": 550.00,
        "inventory": 100})
console.log (re)