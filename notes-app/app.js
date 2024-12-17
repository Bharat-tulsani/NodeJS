const chalk=require('chalk')
const yargs=require('yargs')

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
// console.log(chalk.blue('Hello World!'))
// console.log(chalk.green('Success!'))
// console.log(process.argv[2])
// console.log(process.argv)

yargs.command({
    command:'remove',
    describe:'Removing a note',
    handler:function(){
        console.log('Removing a note!')
    }
})
// Define the 'add' command with different cases
yargs.command({
    command: ['add', 'Add', 'ADD'],
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!');
    }
});

// Define the 'list' command with different cases
yargs.command({
    command: ['list', 'List', 'LIST'],
    describe: 'Listing notes',
    handler: function () {
        console.log('Listing notes!');
    }
});

// Define the 'read' command with different cases
yargs.command({
    command: ['read', 'Read', 'READ'],
    describe: 'Reading a note',
    handler: function () {
        console.log('Reading a note!');
    }
});
console.log(yargs.argv)