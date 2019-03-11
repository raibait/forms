import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-reactive-form',
	templateUrl: './reactive-form.component.html',
	styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

	genders = ['male', 'female'];
	forbiddenNames = ['anna', 'dupa'];
	signupForm: FormGroup;

	constructor() { }

	get hobbiesControls() { return (<FormArray>this.signupForm.get('hobbies')).controls; }

	ngOnInit() {
		this.signupForm = new FormGroup({
			'userData': new FormGroup({
				'username': new FormControl(null, [Validators.required, this.forbiddenNamesValidator.bind(this)]),
				'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
			}),
			'gender': new FormControl('male'),
			'hobbies': new FormArray([])
		});

		this.signupForm.statusChanges.subscribe(
			(status) => console.log(status)
		);

		this.signupForm.valueChanges.subscribe(
			(status) => console.log(status)
		);
	}

	onSubmit() {
		console.log(this.signupForm);
	}

	addHobby() {
		const control = new FormControl(null, Validators.required);
		(<FormArray>this.signupForm.get('hobbies')).push(control);
		console.log((<FormArray>this.signupForm.get('userData')).controls);

	}

	// walidator
	forbiddenNamesValidator(control: FormControl): {[s: string]: boolean} {
		if (this.forbiddenNames.indexOf(control.value) !== -1) {
			return {'nameIsForbidden': true };
		}
		return null;
	}

	forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
		return new Promise<any> ((resolve, reject) => {
			setTimeout(() => {
				if ( control.value === 'test@test.com') {
					resolve( {'mailIsForbidden': true });
				} else {
					resolve(null);
				}
			}, 1500);
		});
	}
}
