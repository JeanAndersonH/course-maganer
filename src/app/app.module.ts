import { Error404Component } from './error-404/error-404.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; /* importou pacote do formas module */
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/stat.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
@NgModule({
  declarations: [                       /* todos os componentes devem ser declarados  */
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,                    // pipe declarado, não um componente mas serve para alterar exibição e fazer alterações text
    NavBarComponent,
    Error404Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule,                        /*importando modulo do angular */
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses',pathMatch:'full'      //raiz do projeto
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: '**', component: Error404Component 
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//importando modulo ngModel
