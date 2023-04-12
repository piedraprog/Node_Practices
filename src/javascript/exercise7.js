import moment from 'moment';
import momentTZ from 'moment-timezone';


const date = moment().subtract(4, 'day').startOf('day').valueOf()

let from = moment().subtract(1, 'week').startOf('day').valueOf(),
  to = moment().endOf('day').valueOf()

const dateWhenHide = date

let probandoTimezone = momentTZ(1675987200000).tz('America/Caracas').format('DD/MM/YYYY HH:mm:ss')
let probandoTimezone2 = momentTZ(1675987200000).zone('-0300').format('DD/MM/YYYY HH:mm:ss')
let probandoTimezone3 = momentTZ(1675987200000).tz('America/Caracas').format('DD/MM/YYYY HH:mm:ss')

console.log("días" , probandoTimezone)
console.log("días" , probandoTimezone2)
console.log("días" , probandoTimezone3)



console.log("desde", from)
console.log("desde", moment(from).format('DD/MM/YYYY HH:mm:ss'))

console.log("desde", to)
console.log("desde", moment(to).format('DD/MM/YYYY HH:mm:ss'))

console.log("desde", date)
console.log("desde", moment(date).format('DD/MM/YYYY HH:mm:ss'))



let dates = [
    {
        "day_time": 1677608215000,
        "total": 105
    },
    {
        "day_time": 1676520000000,
        "total": 101
    },
    {
        "day_time": 1676606400000,
        "total": 90
    },
    {
        "day_time": 1676692800000,
        "total": 87
    },
    {
        "day_time": 1676779200000,
        "total": 82
    },
    {
        "day_time": 1676865600000,
        "total": 54
    },
    {
        "day_time": 1676952000000,
        "total": 11
    }
]

const fuap = dates.map(date=>{
    return {
        date: moment(date.day_time).format('DD-MM-YYYY'),
        value: date.total
    }
})

console.log( moment(dates[3]['day_time']).zone('-0300').format('DD/MM/YYYY') )
console.log( moment(dates[0]['day_time']).zone('-0300').format('HH:mm:00') )