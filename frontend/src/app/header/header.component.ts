import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Exemplo de dados do usuário; substitua pela fonte real (ex: via serviço de autenticação)
  user = { name: 'Usuário Exemplo' };

  // Caso precise notificar o layout para alguma ação, como abrir um sidenav, pode usar um Output.
  @Output() menuToggle = new EventEmitter<void>();

  logout() {
    // Implemente sua lógica de logout aqui.
    console.log('Logout acionado');
  }
}
