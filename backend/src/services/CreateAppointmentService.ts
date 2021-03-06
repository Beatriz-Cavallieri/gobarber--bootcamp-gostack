import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import AppError from '../errors/AppError';

interface RequestDTO {
    provider_id: string;
    date: Date;
}

class CreateAppointmentService {
    public async execute({ provider_id, date }: RequestDTO): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(
            AppointmentsRepository,
        );

        const appointmentDate = startOfHour(date);

        const hasAppointmentInSameDate = await appointmentsRepository.findByDate(
            appointmentDate,
        );

        if (hasAppointmentInSameDate) {
            throw new AppError('This appointment is already booked');
        }

        const newAppointment = appointmentsRepository.create({
            provider_id,
            date: appointmentDate,
        });
        await appointmentsRepository.save(newAppointment);

        return newAppointment;
    }
}

export default CreateAppointmentService;
