import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './Home/not-found/not-found.component';
import { ContactComponent } from './Home/contact/contact.component';
import { HeaderComponent } from './Home/header/header.component';
import { AsideComponent } from './Home/aside/aside.component';
import { FooterComponent } from './Home/footer/footer.component';
import { AccountGetallComponent } from './Account/account-getall/account-getall.component';
import { AccountDetailsComponent } from './Account/account-details/account-details.component';
import { AccountDeleteComponent } from './Account/account-delete/account-delete.component';
import { AccountGetbyidComponent } from './Account/account-getbyid/account-getbyid.component';
import { AccountPostComponent } from './Account/account-post/account-post.component';
import { AdministratorGetallComponent } from './Administrator/administrator-getall/administrator-getall.component';
import { AdministratorGetbyidComponent } from './Administrator/administrator-getbyid/administrator-getbyid.component';
import { AdministratorDeleteComponent } from './Administrator/administrator-delete/administrator-delete.component';
import { AdministratorPostComponent } from './Administrator/administrator-post/administrator-post.component';
import { AdministratorGetbynameComponent } from './Administrator/administrator-getbyname/administrator-getbyname.component';
import { CertificateGetallComponent } from './Certificate/certificate-getall/certificate-getall.component';
import { CertificateGetbyidComponent } from './Certificate/certificate-getbyid/certificate-getbyid.component';
import { CertificateDeleteComponent } from './Certificate/certificate-delete/certificate-delete.component';
import { CertificatePostComponent } from './Certificate/certificate-post/certificate-post.component';
import { ContentGetallComponent } from './Content/content-getall/content-getall.component';
import { ContentGetbyidComponent } from './Content/content-getbyid/content-getbyid.component';
import { ContentPostComponent } from './Content/content-post/content-post.component';
import { ContentDeletComponent } from './Content/content-delet/content-delet.component';
import { CourseGetallComponent } from './Course/course-getall/course-getall.component';
import { CourseGetbyidComponent } from './Course/course-getbyid/course-getbyid.component';
import { CoursePostComponent } from './Course/course-post/course-post.component';
import { CourseDetailsComponent } from './Course/course-details/course-details.component';
import { DurationDetailsComponent } from './Duration/duration-details/duration-details.component';
import { DurationGetallComponent } from './Duration/duration-getall/duration-getall.component';
import { DurationPostComponent } from './Duration/duration-post/duration-post.component';
import { DurationDeleteComponent } from './Duration/duration-delete/duration-delete.component';
import { FeedbackDetailsComponent } from './Feedback/feedback-details/feedback-details.component';
import { FeedbackDeleteComponent } from './Feedback/feedback-delete/feedback-delete.component';
import { FeedbackGetallComponent } from './Feedback/feedback-getall/feedback-getall.component';
import { FeedbackPostComponent } from './Feedback/feedback-post/feedback-post.component';
import { FeedbackGetbynameComponent } from './Feedback/feedback-getbyname/feedback-getbyname.component';
import { FeesDetailsComponent } from './Fees/fees-details/fees-details.component';
import { FeesPostComponent } from './Fees/fees-post/fees-post.component';
import { FeesGetallComponent } from './Fees/fees-getall/fees-getall.component';
import { FeesByidComponent } from './Fees/fees-byid/fees-byid.component';
import { FeesBynameComponent } from './Fees/fees-byname/fees-byname.component';
import { InstructorDetailsComponent } from './Instructor/instructor-details/instructor-details.component';
import { InstructorDeleteComponent } from './Instructor/instructor-delete/instructor-delete.component';
import { InstructorGetbyidComponent } from './Instructor/instructor-getbyid/instructor-getbyid.component';
import { LearnerDetailsComponent } from './Learner/learner-details/learner-details.component';
import { LearnerDeleteComponent } from './Learner/learner-delete/learner-delete.component';
import { LearnerGetallComponent } from './Learner/learner-getall/learner-getall.component';
import { LearnerGetbyidComponent } from './Learner/learner-getbyid/learner-getbyid.component';
import { LearnerGetbynameComponent } from './Learner/learner-getbyname/learner-getbyname.component';
import { QuizDetailsComponent } from './Quiz/quiz-details/quiz-details.component';
import { QuizDeleteComponent } from './Quiz/quiz-delete/quiz-delete.component';
import { QuizGetbyidComponent } from './Quiz/quiz-getbyid/quiz-getbyid.component';
import { QuizGetbynameComponent } from './Quiz/quiz-getbyname/quiz-getbyname.component';
import { HomeComponent } from './Home/home/home.component';
import { QuizPostComponent } from './Quiz/quiz-post/quiz-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ContactComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    AccountGetallComponent,
    AccountDetailsComponent,
    AccountDeleteComponent,
    AccountGetbyidComponent,
    AccountPostComponent,
    AdministratorGetallComponent,
    AdministratorGetbyidComponent,
    AdministratorDeleteComponent,
    AdministratorPostComponent,
    AdministratorGetbynameComponent,
    CertificateGetallComponent,
    CertificateGetbyidComponent,
    CertificateDeleteComponent,
    CertificatePostComponent,
    ContentGetallComponent,
    ContentGetbyidComponent,
    ContentPostComponent,
    ContentDeletComponent,
    CourseGetallComponent,
    CourseGetbyidComponent,
    CoursePostComponent,
    CourseDetailsComponent,
    DurationDetailsComponent,
    DurationGetallComponent,
    DurationPostComponent,
    DurationDeleteComponent,
    FeedbackDetailsComponent,
    FeedbackDeleteComponent,
    FeedbackGetallComponent,
    FeedbackPostComponent,
    FeedbackGetbynameComponent,
    FeesDetailsComponent,
    FeesPostComponent,
    FeesGetallComponent,
    FeesByidComponent,
    FeesBynameComponent,
    InstructorDetailsComponent,
    InstructorDeleteComponent,
    InstructorGetbyidComponent,
    LearnerDetailsComponent,
    LearnerDeleteComponent,
    LearnerGetallComponent,
    LearnerGetbyidComponent,
    LearnerGetbynameComponent,
    QuizDetailsComponent,
    QuizDeleteComponent,
    QuizGetbyidComponent,
    QuizGetbynameComponent,
    HomeComponent,
    QuizPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
