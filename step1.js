const fs = require('fs')
const process = require('process')

const path = process.argv

function cat(err, data) {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(data)
}

fs.readFile(path, 'utf8', cat(err, data))