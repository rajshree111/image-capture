import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {HomeComponent} from './home/home.component';
import {TestComponent} from './test/test.component';
import {SelectCameraComponent} from './select-camera/select-camera.component';





const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'test2', component: SelectCameraComponent },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }