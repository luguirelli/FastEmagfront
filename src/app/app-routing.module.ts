import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListarEquipamentoComponent } from './listar-equipamento/listar-equipamento.component';
import { HeaderComponent } from './header/header.component';
import { CadastrarEquipamentoComponent } from './cadastrar-equipamento/cadastrar-equipamento.component';
import { OrdemServicoComponent } from './ordem-servico/ordem-servico.component';
import { PreventivasComponent } from './preventivas/preventivas.component';


const routes: Routes = [
  {path:'', component:PreventivasComponent},
  {path:'list', component:ListarEquipamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
