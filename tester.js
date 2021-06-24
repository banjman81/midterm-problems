function onlyPunchy(arrStr) {
    let result = []
    for( let a of arrStr){
        let counter = 0;
        for(let char of a){
            if(char =="!"){
                counter++
            }
        }
        if(counter == 0){
            let temp = a + "!"
            result.push(temp)
        }
        else{
            result.push(a.slice(0, a.length-counter+1))
        }
    }
    for(let i=0; i<result.length; i++){
        if(result[i].length>=15){
            result.splice(i,1)
        }
    }
    return result
}

console.log(onlyPunchy(['quarantine!!!!!!!!!!!', 'the matrix!!!!!!!!!!!!!!!!!!!']))
console.log(onlyPunchy(['quarantine!!', 'the matrix!!!']))
console.log(onlyPunchy(['quarantine', 'the matrix']))
console.log(onlyPunchy(['quarantine!', 'the lord of the rings', 'the matrix!']))