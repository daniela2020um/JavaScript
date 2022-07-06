let quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
let quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let sentence = 'I hope this course is not full of jargon'
let phrase = "You cannot end a sentence with because because because is a conjunction"
let random100 = Math.random() * 101
let random255 = Math.random() * 256

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min
}

function getRandomChar(str){
    let random = Math.floor(Math.random() * str.length)
    return str.charAt(random)
}

function pattern(num, pow){
    let str = ''
    console.log()
    for(let i = 1; i <= num; i++){
        const s = str.concat(i, ' ')
        str = s
        for(let j = 0; j <= pow; j++){
            const s2 = str.concat(Math.pow(i,j), ' ') 
            str = s2
        }
        console.log(str)
        str = ''
    }
    console.log()
}

console.log('1.quote: ', quote)
console.log('2. Mothe Teresa: ', quote2)
console.log('3.equal?: ', typeof('10') == typeof(10))
console.log('3.equal: ', typeof(Number('10')) == typeof(10))
console.log('4.float equal?: ', parseFloat('9.8') == 10)
console.log('4.float equal: ', Math.round(parseFloat('9.8')) == 10)
console.log('5.python: ', 'python'.includes('on'), ' jargon: ', 'jargon'.includes('on'))
console.log('6.is in: ', sentence.includes('jargon'))
console.log('7.random 0-100: ', Math.floor(random100))
console.log('8.random 50-100: ', getRandom(50, 100))
console.log('9.random 0-255: ', Math.floor(random255))
console.log('10.random char: ', getRandomChar('JavaScript'))
pattern(5, 3)
console.log('12.substr: ', phrase.substr(31,23))
