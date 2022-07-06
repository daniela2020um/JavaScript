let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let phrase = 'You cannot end a sentence with because because because is a conjunction'
let text = "const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'"

function mostFrequent(txt){
    const clean = txt.replace(/[%$#@&;]/g, '')
    const arr = clean.match(/\w+/g)
    let size = arr.length
    let max = 0, num = 0
    let mostFreq = ''
    for(let i = 0; i < size; i++){
        num = 0
        arr.forEach(element => {
            if (element == arr[i]) {
              num += 1;
            }
        });
        console.log(num)
        if(num > max){
            max = num
            mostFreq = arr[i]
        }
    }
    return mostFreq
}

console.log('1.times love: ', sentence.match(/love/gi).length)
console.log('2.match: ', phrase.match(/because/g).length)
console.log(text.replace(/[%$#@&;]/g, ''))
console.log(mostFrequent(sentence))