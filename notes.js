import fs from 'fs'
import chalk from 'chalk'

export const addNotes = (title, body) => {
  let notes = loadNotes()
  let notesToKeep = notes.filter((note) => note.title !== title)
  notesToKeep.push({
    title: title,
    body: body
  })
  saveNotes(notesToKeep)
  return notesToKeep
}

export const saveNotes = (notes) => {  
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
  console.log(chalk.green('Notes saved!'))
  return notes
}

export const removeNotes = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)
  saveNotes(notesToKeep)
  return notesToKeep
}

export const listNodes = () => {
  const notes = loadNotes()
  notes.forEach((note) => {
    console.log('title:', note.title)
  })
}

export const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)
  if (note) {
    console.log(chalk.green('Note found!'))
    console.log('title:', note.title)
    console.log('body:', note.body)
  } else {
    console.log(chalk.red('Note not found with title', title))
  }
}


export const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
