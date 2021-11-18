import User from '../models/Users.js'
import School from '../models/School.js'
import flash from 'connect-flash'
import passport from 'passport'
import { host } from '../config.js'

export const renderLogin = (req, res) => res.render('sign/login', {
    title: "GikEdu - Inicia sesión",
    contentHeader: {
        partial: () => { return 'button' },
        args: {
            label: 'a',
            class: 'button-ghost',
            url: '/',
            value: 'Regresar'
        }
    },
    host
})

export const validationLogin = passport.authenticate('local', {
    successRedirect: '/App',
    failureRedirect: '/signin',
    failureFlash: true
})

export const renderRegister = async(req, res) => res.render('sign/register', {
    title: "GikEdu - Registro",
    contentHeader: {
        partial: () => { return 'button' },
        args: {
            label: 'a',
            class: 'button-ghost',
            url: '/',
            value: 'Regresar'
        }
    },
    host
})

export const validationRegister = async(req, res) => {
    const { name, code, username, password, confirm_password, email } = req.body
    const errors = []
    if (password != confirm_password) {
        errors.push({ text: 'Las contraseñas no coinciden' })
    }
    if (!password.length > 0) {
        errors.push({ text: 'El campo esta vacio' })
    }
    if (password <= 4) {
        errors.push({ text: 'La contraseña es corta, digite una mas larga' })
    }
    console.log(req.body)
    console.log(errors)
    if (errors.length) {
        res.redirect('/signup')
    } else {
        const emailUser = await User.findOne({ email: email })
        const isCode = await School.findOne({ code })

        if (isCode) {
            req.flash('error_msg', 'El codigo ingresado ya esta registrado, por favor digite otro')
            res.redirect('/signup')
        }
        if (emailUser) {
            req.flash('error_msg', 'El correo ya esta en uso')
            res.redirect('/signup')
        }
        const newSchool = new School({ name, code })
        await newSchool.save()

        const newUser = new User({ username, password, email, school: newSchool._id, rol: 'admin' })
        newUser.password = await newUser.encryptPassword(password)

        await newUser.save((err, user) => {
            res.redirect('/signin')
        })


        //req.flash('succes_msg','TE has registrado')


    }
}