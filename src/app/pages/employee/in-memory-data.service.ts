import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EmployeeEntity } from './employee.model';

@Injectable({providedIn: 'root',})
export class InMemoryDataService implements InMemoryDbService {


  createDb() {
    const employees = [
      {
        id: 1,
        emailAddress: 'Bakiadi_Prasasta69@yahoo.co.id',
        firstName: 'Bakiadi',
        lastName: 'Prasasta',
        password: '_Ab1G8J2C_n84Yn',
        repeatPassword: '_Ab1G8J2C_n84Yn',
        address: '06423 Humaira Mission South Dinashire, OK 07599',
        phoneNumber: '(+62) 435 4738 2060',
      },
      {
        id: 2,
        emailAddress: 'Wani.Siregar@yahoo.co.id',
        firstName: 'Wani',
        lastName: 'Siregar',
        password: '4UFf5AwYLWtbyyc',
        repeatPassword: '4UFf5AwYLWtbyyc',
        address: '345 Wibowo Crest Jaballand, WV 99982',
        phoneNumber: '(+62) 29 1230 4403',
      },
    ];
    return { employees: employees };
  }

  //  auto next id, sambung yg udah ada .. 
  genId(employee: EmployeeEntity[]): number {
    return employee.length > 0 ? Math.max(...employee.map(employee => employee.id)) + 1 : 3;
  }
}
