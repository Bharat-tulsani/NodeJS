// const fs=require('fs')
// fs.writeFileSync('notes.txt','This file was created by Node.js!')
// fs.appendFileSync('notes.txt','This is the appended text.')

// const name=require('./utils.js')
// console.log('app.js is running')
// console.log(name(2,3))
// const validator=require('validator')
// const getNotes=require('./notes.js')
// console.log(getNotes())
// console.log(validator.isEmail('bharattulsani21@gmail.com'))
// console.log(validator.isURL('bharattulsani21@gmail.com'))

// const fs=require('fs')
// const contents=fs.readFileSync('notes.txt','utf8')
// console.log(contents)
// const chalk=require('chalk')
// console.log(chalk.blue('Hello World!'))
// console.log(chalk.green('Success!'))
// console.log(process.argv[2])
console.log(process.argv)
const command=process.argv[2]
if (command==='add'){
    console.log('Adding note!')
}else if(command==='remove'){
    console.log('Removing note!')
}