import {addNotes, removeNotes, listNodes, readNote} from './notes.js'


console.log(addNotes('title1', 'body'))
console.log(addNotes('title2-tobeRemoved', 'body'))
console.log(addNotes('title3', 'body'))
listNodes()
console.log('-----------------')

console.log(removeNotes('title2-tobeRemoved'))
console.log('-----------------')
listNodes()
console.log('-----------------')

readNote('title1')
console.log('-----------------')
readNote('title2-tobeRemoved')
console.log('-----------------')
readNote('title3')