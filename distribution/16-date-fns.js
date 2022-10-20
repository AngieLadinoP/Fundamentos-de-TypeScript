import { subDays, format } from 'date-fns';
const date = new Date(1998, 1, 28); // 0 = january, 1= february
const rta = subDays(date, 30);
console.log(format(rta, 'YYYY/MM/DD'));
