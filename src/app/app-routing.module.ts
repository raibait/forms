import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

const routes: Routes = [
	{
		path: 'model-driven',
		component: ReactiveFormComponent
	},
	{
		path: 'template-driven',
		component: TemplateFormComponent
	},
	{
		path: '',
		redirectTo: '/model-driven',
		pathMatch: 'full'
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
