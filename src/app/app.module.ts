import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {CourseComponent} from './course/course.component';
import {CourseService} from './course/course.service';
import {SummaryPipe} from './summary.pipe';
import {FavoriteComponent} from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { CaseComponent } from './case/case.component';
import { ForComponent } from './for/for.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';

@NgModule({
  declarations: [
    // burada eklenen componentler otomatik olarak tanimlanmaktadir. Tanimlanan moduller yukari import edilir.
    AppComponent,
    ProductComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    CaseComponent,
    ForComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    FormBuilderComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // DI'lar'ı buraya yazmamız lazım.
  providers: [
    CourseService,
    PostService
  ],
  bootstrap: [AppComponent] // Baslangic komponenti
})
export class AppModule {
}
