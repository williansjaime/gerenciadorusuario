import csv
import traceback
from datetime import datetime,timedelta
from flask_restful import Resource
from flask import request,json,jsonify

class Editar(Resource):
    '''
        Class Edtiar Usuario no Arquivo
    ''' 
    try:
        def get(self):
            lista_usuarios = {}
            i = 0 
            with open('DB/dados.csv', 'r') as arquivo:
                leitor = csv.reader(arquivo)
                for linha in leitor:
                    lista_usuarios[i] = json.loads(linha[0].replace("'", '"'))
                    i+=1                                
            return jsonify(lista_usuarios)
        
        def delete(self):
            my_json = request.data.decode('utf8').replace("'", '"')
            data = json.loads(my_json)
            if(data):
                dados_list = []
                with open('DB/dados.csv', 'r') as arquivo:
                    leitor = csv.reader(arquivo)
                    for linha in leitor:
                        if data[0] != json.loads(linha[0].replace("'", '"'))['id']:
                            print(json.loads(linha[0].replace("'", '"'))['id'])
                            dados_list[len(dados_list)]=linha[0]
                    print(len(dados_list))                                
                    with open('DB/dados.csv', 'w') as arquivo2:
                        escritor = csv.writer(arquivo2) 
                        escritor.writerow(dados_list)
                    
            
    
    except Exception as err:
        traceback.print_exc()
