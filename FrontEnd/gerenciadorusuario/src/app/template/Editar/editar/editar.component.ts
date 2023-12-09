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
    
  async DeletarUsuario(id:number){
    this.arry_delete = [];
    let url:string = API_URL_FLASK+"/api/v1/editar";
    this.arry_delete.push(this.user_lista[id]['id']);
    const data = await this.api_usuario_service.DELETE(url,this.arry_delete);
    if(data!=null)
    {
      if(data)
      {
        window.alert("Usuário deletado com sucesso");
        this.user_lista = [];
        this.dados_carregados = false;
        this.GetusuarioLista();
      }else{
        window.alert("Erro ao deletar usuário");
      }
    }
    if(Array.isArray(this.user_lista)){
      this.user_lista.splice(id, 1); 
      this.numero_linhas--;
    } 
  }

  Pesquisar() {
    var input, filter, table, tr, td, cell, i;
    input = document.getElementById("idUsuario") as HTMLInputElement;
    filter = input.value.toUpperCase();
    table = document.getElementById("tableValores") as HTMLInputElement;
    tr = table.getElementsByTagName("tr") ;
    // Montar a lista das tag da tabela
    for (i = 1; i < tr.length; i++) {
      tr[i].style.display = "none";
      td = tr[i].getElementsByTagName("td");  
      //Vai procura so no ID e no nome e sobrenome
      for (var j = 1; j < 4; j++) { 
          cell = tr[i].getElementsByTagName("td")[j];
          if (cell) {
            if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                break;
            } 
          }
      }
    }
  }

}
