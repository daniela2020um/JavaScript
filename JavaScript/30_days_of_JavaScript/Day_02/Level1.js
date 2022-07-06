let challenge = '30 Days Of JavaScript'
let voidStr = ''
let last = challenge.length - 1
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log('2.challenge: ', challenge)
console.log('3.length:', challenge.length)
console.log('4.upper: ', challenge.toUpperCase())
console.log('5.lower: ', challenge.toLowerCase())
console.log('6.substr: ', challenge.substring(1, last))
console.log('7.slice: ', challenge.substring(3, last))
console.log('8.script?: ', challenge.includes('Script'))
console.log('9.array: ', challenge.split());
console.log('10.split: ', challenge.split(' '))
console.log('11.str: ', str.split(', '))
console.log('12.python: ', challenge.replace('JavaScript', 'Python'))
console.log('13.char: ', challenge.charAt(15))
console.log('14.charCode: ', challenge.charCodeAt(11))
console.log('15.index: ', challenge.indexOf('a'))
console.log('16.last: ', challenge.lastIndexOf('a'))
console.log('17.indexS: ', sentence.indexOf('because'))
console.log('18.lastS: ', sentence.lastIndexOf('because'))
console.log('19.seach: ', sentence.search('because'))
console.log('20.trim: ', challenge.trim())
console.log('21.start: ', challenge.startsWith('30'))
console.log('22.end: ', challenge.endsWith('JavaScript'))
console.log('23.match: ', challenge.match(/a/g))
console.log('24.conct: ', voidStr.concat('30 Days Of ', 'JavaScript'))
console.log('25.repeat: ', challenge.repeat(2))
