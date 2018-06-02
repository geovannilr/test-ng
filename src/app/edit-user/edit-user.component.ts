import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;
    selectedValues: string[] = ['Activado'];
  msgs: Message[] = [];
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    const userId = localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
       id: [],
      email: ['', Validators.required],
      username: ['', Validators.required],
      state: ['', Validators.required],
      firstName: [],
      lastName: [],
      language: [],
      profile: [],
      creation: [],
      modified_user: []
    });
    this.userService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['**']);
        },
        error => {
          alert(error);
        });
      this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Usuario', detail: 'Usuario Actualizado exitosamente !'});
  }

}
