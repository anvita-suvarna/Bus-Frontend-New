import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { SelectFlightComponent } from './select-flight/select-flight.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { TriphistoryComponent } from './triphistory/triphistory.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ShowbusesComponent } from './showbuses/showbuses.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { ShowbookingsComponent } from './showbookings/showbookings.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ShowfeedbacksComponent } from './showfeedbacks/showfeedbacks.component';
import { AddbusComponent } from './addbus/addbus.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AdminLoginComponent,
    HomeComponent,
    FlightDetailsComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    AddFlightComponent,
    DeleteFlightComponent,
    PaymentComponent,
    BookingDetailsComponent,
    BookingListComponent,
    SelectFlightComponent,
    FooterComponent,
    NavComponent,
    UpdateFlightComponent,
    ThankyouComponent,
    SearchComponent,
    BookingComponent,
    TriphistoryComponent,
    MyprofileComponent,
    ShowbusesComponent,
    ShowusersComponent,
    ShowbookingsComponent,
    FeedbackComponent,
    ShowfeedbacksComponent,
    AddbusComponent,
    UpdatebusComponent,
    DeletebusComponent,
    UpdateprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
