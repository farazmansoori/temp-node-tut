// FS Module(async){Non-Blocking}

// const fs = require('fs')
// fs.readFileSync

const {readFile, writeFile} = require('fs')
console.log('Start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        // return;
        //OR
        console.log(err)
    }
    // console.log(result)
    const first = result

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            // return;
            //OR
            console.log(err)
        }
        // console.log(result)
        const second = result

        writeFile(
            './content/result-sync.txt',
            `\nHere is Async result: ${first}, ${second}`,
            {flag: 'a'},
            (err, result)=> {
                if(err) {
                    return
                }else {
                    console.log(result);
                    console.log('done with the task');
                }
            }
        )
    })
})
console.log('starting the next one');




/*

Above type of code is buzzy and take more time so the alternatinve of do same thing with any load on server is "Promise" & "ASYNC AWAIT"



*/
