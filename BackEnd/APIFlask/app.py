'''
    Montagem da API para fazer conexão entre o banco de dados e o Sistema Gerenciador de Usuario
'''
import logging
import traceback
from flask import Flask
from flask_cors import CORS
from flask_restful import Api

"""" Importar bibliotecas do sistema """
from Editar.Editar import Editar
from Cadastra.Cadastrar import CadastroUsuario


"""Inicia a aplicação WSGI"""
app = Flask(__name__) 
api = Api(app)

"""Aplicar CORS e gerar log de erros """
CORS(app, resources={r"/api/*": {"Access-Control-Allow-Origin": "http://localhost:4200"}})
logging.getLogger('flask_cors').level = logging.DEBUG

"""Adicionar as rotas de API"""
api.add_resource(CadastroUsuario, '/api/v1/cadastrousuario')
api.add_resource(Editar, '/api/v1/editar')


if __name__ == '__main__':
    try:
        app.run(debug=True)        
    except Exception as err:
        traceback.print_exc()  
