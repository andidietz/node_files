const fs = require('fs')
const axios = require('axios')
const process = require('process')

let path
let output

function handleError(err) {
    console.log(err)
    process.exit(1)
}

function catWrite(path, output) {
    let text

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            handleError(err)
        } else {
            text = data
        }
    })


    fs.writeFile(output, text, 'utf8', (err, data) => {
        if (err) {
            handleError(err)
        } else {
            console.log(data)
        }
    })
}

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            handleError(err)
        }
        console.log(data)
    })
}

function webCat(path) {
    try {
        const resp = axios.get(path)
        console.log(resp.data)
    } catch (err) {
        handleError(err)
    }
}

if (process.argv[2] === '--out') {
    path = process.argv[3]
    output = process.argv[4]
    catWrite(path, output)
} else {
    path = process.argv[2]
}

if (path.startsWith("http")) {
    webCat(path)
} else {
    cat(path)
}