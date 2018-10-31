class Restaurant {
  constructor (props) {
      this.comboDiscount = props.discount
      this.menu = props.menu
  }

  get comboPrice () {
    // Add logic here to calc and return combo price
    let discount = .85
    let comboPrice =
        this.menu.small_pizza +
        this.menu.soda +
        this.menu.salad

    return `$${(comboPrice * discount).toFixed(2)}`
  }
}

const dillonsPizza = new Restaurant({
  discount: 0.85,
  menu: {
      small_pizza: 6.29,
      soda: 1.59,
      salad: 3.49
  }
})

console.log(dillonsPizza.comboPrice);