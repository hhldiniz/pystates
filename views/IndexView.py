import ast
import json

from models.State import State
from utils.MongoDBController import MongoDBController
from views.BaseView import BaseView


class IndexView(BaseView):
    def __init__(self, template="index.html"):
        super().__init__(template)
        self.__db_client = MongoDBController()

    def post(self, request):
        pre_data = request.data.decode('utf-8')
        request_params = ast.literal_eval(pre_data)
        state_name = request_params["state_name"]
        pib = request_params["pib"]
        population = request_params["population"]
        state = State(state_name, pib, population)
        if state.save().inserted_id is not None:
            return json.dumps({'result': True})
        else:
            return json.dumps({'result': False})
