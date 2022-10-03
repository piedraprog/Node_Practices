let s = '12:59:59AM'

let strArr = s.split(':')

if(strArr[2].endsWith('PM')) {
    let newHour = parseInt(strArr[0]) 
    if(newHour < 12) newHour = newHour + 12;
    if(newHour === 12) newHour;
    strArr[0] = newHour.toString()
    strArr[2] = strArr[2].replace('PM','')
}else{
    let newHour = parseInt(strArr[0])
    if(newHour === 12) strArr[0] = '00';
    strArr[2] = strArr[2].replace('AM','')
}

while(strArr.toString().includes(',')){
    strArr = strArr.toString().replace(',',':')
}

console.log(strArr)
