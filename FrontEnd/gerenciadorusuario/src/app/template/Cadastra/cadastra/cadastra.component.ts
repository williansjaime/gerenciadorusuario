import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsuarioserviceService } from '../../../Service/usuarioservice.service';
import { User } from '../../../Interface/InterfaceUsuario';
import { API_URL,API_URL_FLASK } from '../../../env';

@Component({
  selector: 'app-adicionar', standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './cadastra.component.html',
  styleUrl: './cadastra.component.css'
})

export class CadastraComponent {
  title = 'gerenciadorusuarios';
  numero_linhas:  number = 0; 
  user_lista: User[] = [];
  dados_carregados: boolean = false;

  constructor(private api_usuario_service:UsuarioserviceService) 
  {
    this.GetusuarioLista();
  } 

  OnInit(){
    this.numero_linhas;
    this.user_lista;
  }

  OnDestroy(){
    this.numero_linhas;
    this.user_lista    
  }
  
  async GetusuarioLista(): Promise<void> 
  {  
    try{      
        let url:string= API_URL+"/api/v2/users";
        const data = await this.api_usuario_service.GET(url);
        if(data!=null)
        {
          this.dados_carregados = true;
          this.user_lista.push(data);    
        }
    } catch (error) {
      window.alert("Erro ao carregar campos!\n Verifique a conexão com internet!!!");    
    }   
  }
  
  async SalvarUsuario()
  {
    let url:string = API_URL_FLASK+"/api/v1/cadastrousuario";
    const data = await this.api_usuario_service.POST(url,this.user_lista);
    if(data!=null)
    {
      if(data)
      {
        window.alert("Usuário salvo com sucesso");
        this.user_lista = [];
        this.dados_carregados = false;
        this.GetusuarioLista();
      }else{  
        window.alert("Erro ao salvar usuário");
      }
    }
  }

  DeletarIten(){
    this.user_lista = [];
    this.dados_carregados = false;
    this.GetusuarioLista();
  }
}
