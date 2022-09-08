

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; /* importou pacote do formas module */

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';

@NgModule({
  declarations: [                       /* todos os componentes devem ser declarados  */
    AppComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule                         /*importando modulo do angular */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//importando modulo ngModel
