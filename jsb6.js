//bai 1
function checkTime(inputString) {
    const arr1 = inputString.split(" ")
    const yearAndMonth = arr1[0].split("/")
    const hourAndMin = arr1[1].split(":")
    const date = new Date(Number(yearAndMonth[2]),Number(yearAndMonth[0]) - 1,Number(yearAndMonth[1]),Number(hourAndMin[0]),Number(hourAndMin[1]))
    if(date.getTime() < Date.now()) {
        return true
    } 
    else {
        return false
    }
}
console.log(checkTime("11/14/2053 00:00"))
//bai 2
function check13Fri(inputYear) {
    const result = []
    let month = 0
    while(month < 12) {
        const date = new Date(inputYear, month, 13, 18, 30, 12)
        if(date.getDay() == 5) {
                result.push(date.toISOString())
        }
        month++
    }
    return result
}
console.log(check13Fri(2022))
//bai 3
const a = check13Fri(2023)
function bai3(inputArr) {
    let i = 1
    while(i < inputArr.length + 1) {
        console.log(`Ngày thứ ${i}:${inputArr[i-1].slice(0,-14)}`)
        i++
    }
}
bai3(a)
//bai 4
function bai4(week) {
    const now = Date.now() - week*7*24*60*60*1000
    const time = new Date(now)
    return time.toISOString()
}
console.log(bai4(1))
//bai 6
function bai6(year, month) {
    if((year % 4 === 0 && year % 100 != 0) || (year % 100 === 0 && year % 400 == 0)) {
        switch (month) {
            case 1:
                return 31
            case 2:
                return 29
            case 3:
                return 31
            case 4:
                return 30
            case 5:
                return 31
            case 6:
                return 30
            case 7:
                return 31
            case 8:
                return 31
            case 9:
                return 30
            case 10:
                return 31
            case 11:
                return 30
            case 12:
                return 31
        }
    }
    else {
        switch (month) {
            case 1:
                return 31
            case 2:
                return 28
            case 3:
                return 31
            case 4:
                return 30
            case 5:
                return 31
            case 6:
                return 30
            case 7:
                return 31
            case 8:
                return 31
            case 9:
                return 30
            case 10:
                return 31
            case 11:
                return 30
            case 12:
                return 31
        }
    }
}
console.log(bai6(2024,2))
