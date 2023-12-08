import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsuarioserviceService } from '../../../Service/usuarioservice.service';
import { User } from '../../../Interface/InterfaceUsuario';

@Component({
  selector: 'app-adicionar', standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './adicionar.component.html',
  styleUrl: './adicionar.component.css'
})

export class AdicionarComponent {
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
        const data = await this.api_usuario_service.GET();
        if(data!=null)
        {
          this.dados_carregados = true;
          this.user_lista.push(data);    
        }
    } catch (error) {
      window.alert("Erro ao carregar campos!\n Verifique a conexão com internet!!!");    
    }   
  }
 
  
  AddUsuario():void
  {
    // const id_usuario = document.getElementById(('IDdousuarioselect')) as HTMLInputElement || null;
    // if(id_usuario!=null)
    // {
    //   const nome_usuario = this.lista_usuarios.filter((el: any) => el.ID == Number(id_usuario.value));    
    //   this.lista_tarefas[this.numero_linhas] = 
    //   {
    //     idusuario : Number(id_usuario.value),
    //     nomeusuario: nome_usuario[0].Nomeusuario,
    //     tarefa :"",
    //     descricao : "",
    //     dataInicioTarefa : "",
    //     dataFinalTarefa : "",
    //     userToken : "",
    //   };
    //   this.numero_linhas++;
    // }
  }
  
  AddItenLista(id:number):void
  {
    // if(id != null)
    // { 
    //   const id_usuario = document.getElementById(('IDdousuarioselect')) as HTMLInputElement || null;
    //   const tarefa = document.getElementById(('tarefa'+id)) as HTMLInputElement || null;
    //   const descricao_tarefa = document.getElementById(('descricao'+id)) as HTMLInputElement || null;
    //   const date_incicio_tarefa = document.getElementById(('dateIncicio'+id)) as HTMLInputElement || null;
    //   const data_final_tarefa = document.getElementById(('dataFinal'+id)) as HTMLInputElement || null;
      
    //   if(tarefa != null && date_incicio_tarefa != null && data_final_tarefa !=null && id_usuario!=null)
    //   {
    //     const nome_usuario = this.lista_usuarios.filter((el: any) => el.ID == Number(id_usuario.value)); 
    //     this.lista_tarefas[id] = 
    //     {
    //       idusuario : Number(id_usuario.value),
    //       nomeusuario: nome_usuario[0].Nomeusuario,
    //       tarefa :tarefa.value,
    //       descricao :descricao_tarefa.value,
    //       dataInicioTarefa : date_incicio_tarefa.value,
    //       dataFinalTarefa : data_final_tarefa.value,
    //       userToken : "vazio",
    //     };
    //   }      
    // }
  }

  async SalvarCadastroTarefas()
  {
    // for (const valor in this.lista_tarefas)
    // {
    //   this.AddItenLista(Number(valor));
    // }
    // if(this.lista_tarefas.length > 0)
    // {
    //   const data = await this.API_edite_service.POST(this.lista_tarefas);
    //   if(data!=null)
    //   {
    //     if(data.ok)
    //     {
    //       window.alert("Tarefas salvas com sucesso");
    //       this.lista_tarefas = [];
    //       this.numero_linhas = 0;
    //     }else{
    //       window.alert("Erro ao salvas as tarefa");
    //     }
    //   }      
    // }
  }

  DeletarIten(id:number){
    // if(Array.isArray(this.lista_tarefas)){
    //   this.lista_tarefas.splice(id, 1); 
    //   this.numero_linhas--;
    // } 
  }
}
