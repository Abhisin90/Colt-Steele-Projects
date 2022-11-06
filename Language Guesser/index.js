import {franc} from 'franc'
import langs from 'langs'

const lang = process.argv[2]
const iso = franc(lang)
try{
    const language = langs.where("3",iso)
    console.log(`Language guessed is : ${language.name}`)
} catch(e){
    console.log('Not enought length to guess!!!')
}
