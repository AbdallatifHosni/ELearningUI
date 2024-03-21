import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
/*ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff*/

/*gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg* */
import { AdministratorDeleteComponent } from './Administrator/administrator-delete/administrator-delete.component';
import { AdministratorGetallComponent } from './Administrator/administrator-getall/administrator-getall.component';
import { AdministratorGetbyidComponent } from './Administrator/administrator-getbyid/administrator-getbyid.component';
import { AdministratorGetbynameComponent } from './Administrator/administrator-getbyname/administrator-getbyname.component';
import { ContactComponent } from './Home/contact/contact.component';
import { CertificateDeleteComponent } from './Certificate/certificate-delete/certificate-delete.component';
import { CertificateGetallComponent } from './Certificate/certificate-getall/certificate-getall.component';
import { CertificateGetbyidComponent } from './Certificate/certificate-getbyid/certificate-getbyid.component';
import { CertificatePostComponent } from './Certificate/certificate-post/certificate-post.component';
import { ContentDeletComponent } from './Content/content-delet/content-delet.component';
import { ContentGetallComponent } from './Content/content-getall/content-getall.component';
import { ContentGetbyidComponent } from './Content/content-getbyid/content-getbyid.component';
import { ContentPostComponent } from './Content/content-post/content-post.component';
import { CourseGetallComponent } from './Course/course-getall/course-getall.component';
import { CourseDetailsComponent } from './Course/course-details/course-details.component';
import { CourseGetbyidComponent } from './Course/course-getbyid/course-getbyid.component';
import { DurationDeleteComponent } from './Duration/duration-delete/duration-delete.component';
import { DurationDetailsComponent } from './Duration/duration-details/duration-details.component';
import { DurationPostComponent } from './Duration/duration-post/duration-post.component';
import { DurationGetallComponent } from './Duration/duration-getall/duration-getall.component';
import { FeedbackDetailsComponent } from './Feedback/feedback-details/feedback-details.component';
import { FeedbackDeleteComponent } from './Feedback/feedback-delete/feedback-delete.component';
import { FeedbackPostComponent } from './Feedback/feedback-post/feedback-post.component';
import { FeedbackGetbynameComponent } from './Feedback/feedback-getbyname/feedback-getbyname.component';
import { FeesByidComponent } from './Fees/fees-byid/fees-byid.component';
import { FeesBynameComponent } from './Fees/fees-byname/fees-byname.component';
import { FeesPostComponent } from './Fees/fees-post/fees-post.component';
import { FeesGetallComponent } from './Fees/fees-getall/fees-getall.component';
import { FeesDetailsComponent } from './Fees/fees-details/fees-details.component';
import { AsideComponent } from './Home/aside/aside.component';
import { FooterComponent } from './Home/footer/footer.component';
import { HeaderComponent } from './Home/header/header.component';
import { NotFoundComponent } from './Home/not-found/not-found.component';
import { InstructorDeleteComponent } from './Instructor/instructor-delete/instructor-delete.component';
import { InstructorDetailsComponent } from './Instructor/instructor-details/instructor-details.component';
import { InstructorGetbyidComponent } from './Instructor/instructor-getbyid/instructor-getbyid.component';
import { LearnerDeleteComponent } from './Learner/learner-delete/learner-delete.component';
import { LearnerDetailsComponent } from './Learner/learner-details/learner-details.component';
import { LearnerGetallComponent } from './Learner/learner-getall/learner-getall.component';
import { LearnerGetbynameComponent } from './Learner/learner-getbyname/learner-getbyname.component';
import { AccountPostComponent } from './Account/account-post/account-post.component';
import { HomeComponent } from './Home/home/home.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent,pathMatch:"full" },
  {path:"Administrator/Delete",component:AdministratorDeleteComponent},
  {path:"Administrator/Getall",component:AdministratorGetallComponent},
  {path:"Administrator/Getbyid/:id",component:AdministratorGetbyidComponent},
  {path:"Administrator/Getbyname/:name",component:AdministratorGetbynameComponent},
  {path:"Account/Post",component:AccountPostComponent},
  {path:"Certificate/Delete",component:CertificateDeleteComponent},
  {path:"Certificate/Getall",component:CertificateGetallComponent},
  {path:"Certificate/Getbyid",component:CertificateGetbyidComponent},
  {path:"Certificate/Post",component:CertificatePostComponent},
  {path:"Content/Delet/:id",component:ContentDeletComponent},
  {path:"Content/Getall",component:ContentGetallComponent},
  {path:"Content/Getbyid",component:ContentGetbyidComponent},
  {path:"Content/Post",component:ContentPostComponent},
  {path:"Course/Getall",component:CourseGetallComponent},
  {path:"Course/Details",component:CourseDetailsComponent},
  {path:"Course/Getbyid",component:CourseGetbyidComponent},
  {path:"Duration/Delete",component:DurationDeleteComponent},
  {path:"Duration/Details",component:DurationDetailsComponent},
  {path:"Duration/Post",component:DurationPostComponent},
  {path:"Duration/Getall",component:DurationGetallComponent},
  {path:"Feedback/Details",component:FeedbackDetailsComponent},
  {path:"Feedback/Delete",component:FeedbackDeleteComponent},
  {path:"Feedback/Post",component:FeedbackPostComponent},
  {path:"Feedback/Getbyname",component:FeedbackGetbynameComponent},
  {path:"Fees/Byid/:id",component:FeesByidComponent},
  {path:"Fees/Byname/:name",component:FeesBynameComponent},
  {path:"Fees/Post",component:FeesPostComponent},
  {path:"Fees/Getall",component:FeesGetallComponent},
  {path:"Fees/Details",component:FeesDetailsComponent},
  {path:"Aside",component:AsideComponent},
  {path:"Contact",component:ContactComponent},
  {path:"Footer",component:FooterComponent},
  {path:"Header",component:HeaderComponent},
  {path:"NotFound",component:NotFoundComponent},
  {path:"Instructor/Delete",component:InstructorDeleteComponent},
  {path:"Instructor/Details",component:InstructorDetailsComponent},
  {path:"Instructor/Getbyid",component:InstructorGetbyidComponent},
  {path:"Learner/Delete",component:LearnerDeleteComponent},
  {path:"Learner/Details",component:LearnerDetailsComponent},
  {path:"Learner/Getall",component:LearnerGetallComponent},
  {path:"Learner/Getbyname",component:LearnerGetbynameComponent},
  {path:"**",component:NotFoundComponent},
  {path:"",component:NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
