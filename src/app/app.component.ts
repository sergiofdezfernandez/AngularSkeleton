import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'AngularSkeleton'

	constructor(arg1: string, arg: string, arg3: string, arg4: string, arg5: string, arg6: string) {
		console.log('Test')
	}
}
