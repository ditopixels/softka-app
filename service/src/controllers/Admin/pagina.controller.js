import { admin as nav } from "../../helpers/nav"

export const renderPagina = (req, res) => {
    const data = {
        contentHeader: {
            partial: () => 'profile'
        },
        contentRol: {
            partial: () => 'rol/admin/pagina'
        }
    }
    data.navigator = nav(req.path)
    res.render('user/dashboard', data)
}