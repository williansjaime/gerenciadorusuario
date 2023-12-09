import csv
import traceback
from io import StringIO
from flask_restful import Resource
from datetime import datetime,timedelta
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
                    dados_list = list(leitor)
                    arquivo.close()                
                    
                indice_linha_para_remover = 0 
                for index in dados_list:
                    if data[0] == json.loads(index[0].replace("'", '"'))['id']:
                        dados_list.pop(indice_linha_para_remover)
                    indice_linha_para_remover += 1

                with open('DB/dados.csv', 'w', newline='') as arquivo:
                    escritor = csv.writer(arquivo)
                    escritor.writerows(dados_list)
                    arquivo.close()
    
    except Exception as err:
        traceback.print_exc()
