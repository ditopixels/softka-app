import { host } from '../config.js'

const rol = 'student'

export const renderHome = (req, res) => {
    res.render('user/home', {
        title: 'GikEdu',
        contentHeader: {
            partial: () => { return "button" },
            args: {
                label: "a",
                value: "Inicia Sesión",
                class: "button",
                url: "/signin"
            }
        },
        contentOptions: {
            partial: () => { return `rol/${rol}` },
        },
        host
    })
}


export const renderDocs = (req, res) => res.render('user/docs', { host })