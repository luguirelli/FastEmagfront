import{Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {CadastrarEquipamentoComponent} from './cadastrar-equipamento/cadastrar-equipamento.component'
import { ListarEquipamentoComponent } from './listar-equipamento/listar-equipamento.component';
import { PreventivasComponent } from './preventivas/preventivas.component';
import { HeaderComponent } from './header/header.component';

export const ROUTES: Routes = [
    {path: '', component:HeaderComponent},
    {path: 'home', component:HomeComponent},
    {path: 'cadastrarEquipaments', component:CadastrarEquipamentoComponent},
    {path: 'listarEquipaments', component:ListarEquipamentoComponent},
    {path: 'preventivas', component: PreventivasComponent}
]