const d = document
import animatedInputs from './components/input.js'
import Navigator from './components/Navigator.js'
import password from './components/password.js'
import File from './file.js'

d.addEventListener('DOMContentLoaded',()=>{
    animatedInputs()
    password()
    Navigator()
    File()
})