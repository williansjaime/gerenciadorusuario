import csv
import traceback
from datetime import datetime
from flask_restful import Resource
from flask import request,json

class CadastroUsuario(Resource):
    '''
        Class Cadastrar Usuario no Banco
    ''' 
    try:
        def post(self):           
            my_json = request.data.decode('utf8').replace("'", '"')
            content = json.loads(my_json)
            if(content):
                with open('DB/dados.csv', 'a') as arquivo:
                    escritor = csv.writer(arquivo)  
                    escritor.writerow(content)    

    except Exception as err:    
        traceback.print_exc()
