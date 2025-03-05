import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {
    public greeting(): string {
        const message = 'Hello from Employees!';
        return message;
    }
}
