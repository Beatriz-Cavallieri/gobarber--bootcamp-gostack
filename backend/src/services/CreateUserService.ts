import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { UserMap } from '../mappers/UserMap';
import User from '../models/Users';
import AppError from '../errors/AppError';

interface Request {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, email, password }: Request): Promise<UserMap> {
        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository.findOne({
            where: { email },
        });
        if (checkUserExists) {
            throw new AppError('Email address already used');
        }

        const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: hashedPassword,
        });
        const dto: UserMap = await usersRepository.save(user);

        return dto;
    }
}

export default CreateUserService;
