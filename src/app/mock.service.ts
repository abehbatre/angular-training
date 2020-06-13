import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EmployeeEntity } from './modules/materi-2/materi2.model';

// MOCK SERVICE
@Injectable({ providedIn: 'root', })
export class MockService implements InMemoryDbService {
  createDb() {
    // for materi1 (book)




    // for materi2 (employee)
    const employees = [
      {
        id: 1,
        emailAddress: 'vakiadi_prasasta69@yahoo.co.id',
        firstName: 'Bakiadi',
        lastName: 'Prasasta',
        password: '_Ab1G8J2C_n84Yn',
        repeatPassword: '_Ab1G8J2C_n84Yn',
        address: '06423 Humaira Mission South Dinashire, OK 07599',
        phoneNumber: '85242187852',
      },
      {
        id: 2,
        emailAddress: 'wani_siregar@yahoo.co.id',
        firstName: 'Wani',
        lastName: 'Siregar',
        password: '4UFf5AwYLWtbyyc',
        repeatPassword: '4UFf5AwYLWtbyyc',
        address: '345 Wibowo Crest Jaballand, WV 99982',
        phoneNumber: '85217087944',
      },
    ];
    return { employees: employees };
  }

  //  auto generate id (next strategy) 
  genIdForEmployee(employee: EmployeeEntity[]): number {
    return employee.length > 0 ? Math.max(...employee.map(employee => employee.id)) + 1 : 3;
  }
}