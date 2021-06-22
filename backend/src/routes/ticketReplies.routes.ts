import { Router } from 'express';
const router = Router();

import * as ticketRepliesController from '../controllers/ticketReplies.controller';
import * as checkToken from '../middlewares/checkToken';

router.post('/', [checkToken.checkToken, checkToken.isAdmin], ticketRepliesController.createTicketReply);
router.get('/', [checkToken.checkToken, checkToken.isAdmin], ticketRepliesController.getTicketReplies);
router.get('/:id', [checkToken.checkToken], ticketRepliesController.getTicketRepliesByTicketId);
router.get('/:id/id', [checkToken.checkToken], ticketRepliesController.getTicketReplyById);
router.put('/:id', [checkToken.checkToken, checkToken.isAdmin], ticketRepliesController.updateTicketReplyById);
router.delete('/:id', [checkToken.checkToken, checkToken.isAdmin], ticketRepliesController.deleteTicketReplyById);

export default router;