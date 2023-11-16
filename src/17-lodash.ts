import _ from 'lodash'; // npm i --save-dev @types/lodash

const data = [
  {
    username: 'yovany',
    role: 'admin'
  },
  {
    username: 'rubi',
    role: 'seller'
  },
  {
    username: 'rodrigo',
    role: 'seller'
  },
  {
    username: 'santi',
    role: 'customer'
  }
]

const rta = _.groupBy(data, item => item.role);
console.log(rta);
