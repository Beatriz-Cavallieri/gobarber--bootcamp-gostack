import AuthenticateUserService from '../services/AuthenticateUserService';
import { Router } from 'express';
import { UserMap } from '../mappers/UserMap';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    try {
        const { email, password } = request.body;

        const authenticateUser = new AuthenticateUserService();

        const { user } = await authenticateUser.execute({ email, password });

        return response.json(UserMap.toDTO(user));
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default sessionsRouter;
