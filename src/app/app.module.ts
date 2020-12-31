import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { FormDebugComponent } from './cadastro/form-debug/form-debug.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConteudoComponent,
    CadastroComponent,
    ModalComponent,
    FormDebugComponent
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
