import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Message} from 'primeng/components/common/api';

import {User} from '../models';
import {UserService} from '../services';


@Component({
  templateUrl: 'home.component.html',
  styles: [`
        /* Column Priorities */
        @media only all {
            th.ui-p-1,
            td.ui-p-6,
            th.ui-p-5,
            td.ui-p-5,
            th.ui-p-4,
            td.ui-p-4,
            th.ui-p-3,
            td.ui-p-3,
            th.ui-p-2,
            td.ui-p-2 {
                display: none;
            }
        }

        /* Show priority 1 at 320px (20em x 16px) */
        @media screen and (min-width: 20em) {
            th.ui-p-1,
            td.ui-p-1 {
                display: table-cell;
            }
        }

        /* Show priority 2 at 480px (30em x 16px) */
        @media screen and (min-width: 30em) {
            th.ui-p-2,
            td.ui-p-2 {
                display: table-cell;
            }
        }

        /* Show priority 3 at 640px (40em x 16px) */
        @media screen and (min-width: 40em) {
            th.ui-p-3,
            td.ui-p-3 {
                display: table-cell;
            }
        }

        /* Show priority 4 at 800px (50em x 16px) */
        @media screen and (min-width: 50em) {
            th.ui-p-4,
            td.ui-p-4 {
                display: table-cell;
            }
        }

        /* Show priority 5 at 960px (60em x 16px) */
        @media screen and (min-width: 60em) {
            th.ui-p-5,
            td.ui-p-5 {
                display: table-cell;
            }
        }

        /* Show priority 6 at 1,120px (70em x 16px) */
        @media screen and (min-width: 70em) {
            th.ui-p-6,
            td.ui-p-6 {
                display: table-cell;
            }
        }
    `]
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  msgs: Message[] = [];
  cols: any[];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
    this.cols = [
      {field: 'id', header: 'Id', style: '{"width": "10px"}'},
      {field: 'username', header: 'Login'},
      {field: 'email', header: 'Email'},
      {field: 'state', header: ''},
      {field: 'language', header: 'Idioma'},
      {field: 'profile', header: 'Perfiles'},
      {field: 'creation', header: 'Fecha de Creacion'},
      {field: 'modified_user', header: 'Modificado Por'},
      {field: '', header: ''},
    ];
  }

  selectUser(user: User) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Car Select', detail: 'Vin: '});
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      });
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Usuario', detail: 'Usuario eliminado exitosamente !'});
  }

  editUser(user: User): void {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['edit-user']);
  }

  viewUser(user: User): void {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['view-user']);
  }
}
