import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CadastrarEquipamentoComponent } from './cadastrar-equipamento/cadastrar-equipamento.component';
import { ListarEquipamentoComponent } from './listar-equipamento/listar-equipamento.component';
import { PreventivasComponent } from './preventivas/preventivas.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EquipamentService } from './listar-equipamento/equipament.service';
import { HttpModule } from '@angular/http';
import { OrdemServicoComponent } from './ordem-servico/ordem-servico.component';
import { DefeitosComponent } from './defeitos/defeitos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    CadastrarEquipamentoComponent,
    ListarEquipamentoComponent,
    PreventivasComponent,
    OrdemServicoComponent,
    DefeitosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [EquipamentService],
  bootstrap: [AppComponent]
})
export class AppModule { }