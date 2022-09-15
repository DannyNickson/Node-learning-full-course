const fs = require('fs')
const path = require('path')
const pathToFile = path.resolve(__dirname, 'text.txt')
const data = '1213213'
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}
const appendFileAsync = async (path,data) => {
    return new Promise((resolve, reject) => fs.appendFile(path,data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}
const readFileAsync = async (path,data) => {
    return new Promise((resolve, reject) => fs.readFile(path,{encoding:'utf-8'}, (err,data) => {
        if (err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}
const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}


// writeFileAsync(pathToFile,data)
//     .then(() => appendFileAsync(pathToFile," ME"))
//     .then(() => appendFileAsync(pathToFile," Mot"))
//     .then(() => appendFileAsync(pathToFile," Dot"))
//     .then(() => appendFileAsync(pathToFile," Cot"))
//     .then(() => readFileAsync(pathToFile))
//     .then(data => console.log(data))
//     .catch(err=>console.log(err))

// removeFileAsync(pathToFile)
//     .then(()=>console.log("file has removed"))
