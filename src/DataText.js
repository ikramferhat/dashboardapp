export const CreditCardDATA = [
  {
    id: 1,
    type: 'card-type',
    cardNumber: '2555417036958956',
    cardHolder: 'username',
    valid: {m: 10, y: 24},
    currentBalance: '2000'
  },
  {
    id: 2,
    type: 'card-type',
    cardNumber: '2555417036954074',
    cardHolder: 'username',
    valid: {m: 9, y: 25},
    currentBalance: '200'
  },
  {
    id: 3,
    type: 'card-type',
    cardNumber: '111141702885142',
    cardHolder: 'username',
    valid: {m: 10, y: 23},
    currentBalance: '100'
  }
];
export const PieChartDATA = {
  series: [44, 55, 13],
  labels: ['Online Shop', 'Food', 'Others']
}
export const LineChartDATA = {
  series: [{data: [11, 13, 9, 15]}],
  labels: ['Jan', 'Feb', 'Mar', 'Apr']
}
export const RadialChartDATA = {
series: [70, 30],
labels: ['Income', 'Expenses']
}
export const BarLineChartDATA = {
  series: [
      {
        name: "+$",
        data: [+70, +300, +200, +105, +120, +100, +100, +50, +200, +100, +20, +111]
      },
      {
        name: "-$",
        data: [100, 200, 100, 205, 320, 100, 200, 300, 100, 300, 250, 101]
      }
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
}