const input = document.getElementById('number')
const button = document.getElementById('convert-btn')
const output = document.getElementById('output')
const noValue = 'Please enter a valid number'
const minus = 'Please enter a number greater than or equal to 1'
const under = 'Please enter a number less than or equal to 3999'

button.addEventListener('click', function () {
    let number = input.value.split('')
    console.log(number)
    const unit = ["I", "II", 'III', 'IV', 'V', 'VI', 'VII', 'VIII', "IX"]
    const ten = ["X", "XX", 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', "XC"]
    const hundred = ["C", "CC", 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', "CM"]
    const thousand = ["M", "MM", 'MMM']
    if (number.length == 0) return output.innerText = noValue
    if (input.value < 1) return output.innerText = minus
    if (input.value > 3999) return output.innerText = under
    if (number.length == 1) {
        let single = unit[number - 1]
        output.innerText = single
        console.log(unit)
    }
    if (number.length == 2) {
        let double = `${ten[number[0] - 1]}${isZero(number[1], unit)}`
        output.innerText = double
        console.log(ten)
    }
    if (number.length == 3) {
        let triple = `${hundred[number[0] - 1]}${isZero(number[1], ten)}${isZero(number[2], unit)}`
        output.innerText = triple
        console.log(hundred)
    }
    if (number.length == 4) {
        let quadruple = `${thousand[number[0] - 1]}${isZero(number[1], hundred)}${isZero(number[2], ten)}${isZero(number[3], unit)}`
        output.innerText = quadruple
        console.log(thousand)
    }
    console.log(`${ten[number[0] - 1]}${isZero(number[1], unit)}`)
})

function isZero(num, unit) {
    return num == 0 ? '' : unit[num - 1]
}