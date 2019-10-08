const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    {id: 'name', title: 'Name'},
    {id: 'surname', title: 'Surname'},
    {id: 'age', title: 'Age'},
    {id: 'gender', title: 'Gender'},
  ]
});

const data = [
  {
    name: 'John',
    surname: 'Snow',
    age: 26,
    gender: 'M'
  }, {
    name: 'Clair',
    surname: 'White',
    age: 33,
    gender: 'F',
  }, {
    name: 'Fancy',
    surname: 'Brown',
    age: 78,
    gender: 'F'
  }
];
  

csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));





var csvWriter2 = require('csv-write-stream')
var writer = csvWriter2({sendHeaders: false})
const fs = require('fs');


writer.pipe(fs.createWriteStream('out.csv', {flags: 'a'}))

writer.write({name: 'Travis',
    surname: 'Hoyt',
    age: 23,
    gender: 'M'})
writer.end()
