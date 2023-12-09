import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { API_URL,API_URL_FLASK } from '../../../env';
import { UsuarioserviceService } from '../../../Service/usuarioservice.service';
import { User } from '../../../Interface/InterfaceUsuario';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  numero_linhas:  number = 0; 
  user_lista: User[] = [];
  arry_delete:number[] = [];
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
        let url:string= API_URL_FLASK+"/api/v1/editar";
        const data = await this.api_usuario_service.GET(url);
        if(data!=null)
        {
          this.dados_carregados = true;
          for (var value in data) 
          {
            this.user_lista.push(data[value]);            
          } 

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
        window.alert("Tarefas salvas com sucesso");
        this.user_lista = [];
        this.dados_carregados = false;
        this.GetusuarioLista();
      }else{
        window.alert("Erro ao salvas as tarefa");
      }
    }
  }

  async DeletarUsuario(id:number){
    this.arry_delete = [];
    let url:string = API_URL_FLASK+"/api/v1/editar";
    this.arry_delete.push(this.user_lista[id]['id']);
    const data = await this.api_usuario_service.DELETE(url,this.arry_delete);
    if(data!=null)
    {
      if(data)
      {
        window.alert("Tarefas salvas com sucesso");
        this.user_lista = [];
        this.dados_carregados = false;
        this.GetusuarioLista();
      }else{
        window.alert("Erro ao salvas as tarefa");
      }
    }
    if(Array.isArray(this.user_lista)){
      this.user_lista.splice(id, 1); 
      this.numero_linhas--;
    } 
  }

}
