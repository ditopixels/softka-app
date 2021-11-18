import { Router } from 'express'
import { renderDashboard } from '../controllers/Admin/dashboard.controller.js'
import { renderMember } from '../controllers/Admin/members.controller.js';
import { renderPagina } from '../controllers/Admin/pagina.controller.js';
import { isAuth } from '../helpers/auth.js'

const router = Router();

router.get('/App', isAuth, renderDashboard);

router.get('/App/inicio', (req, res) => res.redirect('/App'));

router.get('/App/biblioteca', isAuth, renderDashboard)

router.get('/App/documentos', isAuth, renderDashboard)

router.get('/App/pagina', isAuth, renderPagina)

router.get('/App/configuracion', isAuth, renderDashboard)

router.get('/App/miembros', isAuth, renderMember)



export default router;