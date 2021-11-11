const fs = require('fs')
const axios = require('axios')
const process = require('process')

const path = process.argv

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            process.exit(1)
        }
        console.log(data)
    })
}

function webCat(path) {
    try {
        const resp = axios.get(path)
        console.log(resp.data)
    } catch (err) {
        console.log(err)
    }
}

if (path.startsWith("http")) {
    webCat(path)
} else {
    cat(path)
}