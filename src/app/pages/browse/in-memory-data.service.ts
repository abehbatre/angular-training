import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Browse } from './browse.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const browses = [
      {
        id: 11,
        emailAddress: 'adit',
        firstName: 'adit',
        lastName: 'adit',
        password: 'adit',
        repeatPassword: 'adit',
        address: 'adit',
        phoneNumber: 'adit',
      },
      {
        id: 12,
        emailAddress: 'adit2',
        firstName: 'adit2',
        lastName: 'adit2',
        password: 'adit2',
        repeatPassword: 'adit2',
        address: 'adit2',
        phoneNumber: 'adit2',
      },
    ];
    return { browses };
  }

  genId(browse: Browse[]): number {
    return browse.length > 0 ? Math.max(...browse.map(hero => hero.id)) + 1 : 11;
  }
}
