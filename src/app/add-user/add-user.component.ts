import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  selectedValues: string[] = ['Activado'];
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {}

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
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

  }

  onSubmit() {
    if (this.addForm.value.state === true) {
      this.addForm.value.state = 'Activado';
    }
    this.addForm.value.creation = new Date().toISOString().slice(0, 10);
    this.addForm.value.creation = 'system';
    this.userService.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-user']);
      });
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Usuario', detail: 'Usuario ingresado exitosamente !'});
  }

}
