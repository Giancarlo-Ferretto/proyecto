import { Router } from 'express';
const router = Router();

import * as ticketController from '../controllers/ticket.controller';
import * as checkToken from '../middlewares/checkToken';

router.post('/', [checkToken.checkToken], ticketController.createTicket);
router.get('/', [checkToken.checkToken, checkToken.isAdmin], ticketController.getTickets);
router.get('/:id', [checkToken.checkToken], ticketController.getTicketById);
router.put('/:id', [checkToken.checkToken, checkToken.isAdmin], ticketController.updateTicketById);
router.delete('/:id', [checkToken.checkToken, checkToken.isAdmin], ticketController.deleteTicketById);

export default router;