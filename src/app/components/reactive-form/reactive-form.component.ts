import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-reactive-form',
	templateUrl: './reactive-form.component.html',
	styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

	genders = ['male', 'female'];
	signupForm: FormGroup;

	constructor() { }

	ngOnInit() {
		this.signupForm = new FormGroup({
			'userData': new FormGroup({
				'username': new FormControl(null, Validators.required),
				'email': new FormControl(null, [Validators.required, Validators.email]),
			}),
			'gender': new FormControl('male')
		});
	}

	onSubmit() {
		console.log(this.signupForm);
	}

}
