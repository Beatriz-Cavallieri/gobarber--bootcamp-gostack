import AuthenticateUserService from '../services/AuthenticateUserService';
import { Router } from 'express';
import { UserMap } from '../mappers/UserMap';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    try {
        const { email, password } = request.body;

        const authenticateUser = new AuthenticateUserService();

        const { user, token } = await authenticateUser.execute({ email, password });

        const userNoPassword = UserMap.toDTO(user)
        return response.json({user: userNoPassword, token});
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default sessionsRouter;
