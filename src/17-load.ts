import _ from 'lodash';
const data = [
  {
    username: 'Pepito',
    role: 'admin',
  },
  {
    username: 'Luis',
    role: 'seller',
  },
  {
    username: 'Maria',
    role: 'seller',
  },
  {
    username: 'Nico',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
