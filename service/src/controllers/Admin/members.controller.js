import Users from '../../models/Users.js'
import { admin as nav } from '../../helpers/nav.js'
import { host } from '../../config.js'
export const renderMember = async(req, res) => {

    const members = await Users.find({}, 'username email rol')

    const data = {
        title: "GikEdu - Miembros",
        contentHeader: {
            partial: () => { return 'profile' },
        },
        contentRol: {
            partial: () => `rol/admin/miembros`,
            args: { class: "pad" }
        },
        data: {
            username: req.user.username
        },
        members: []
    }
    members.forEach(member => {
        data.members.push({
            _id: member._id,
            username: member.username,
            rol: member.rol,
        })
    })
    data.navigator = nav(req.path)
    data.host = host
    res.render('user/dashboard', data)
}