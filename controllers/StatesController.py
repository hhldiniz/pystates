from models.State import State


class StatesController:
    def __init__(self):
        self.__state_model = State()

    def get_all(self):
        return str(self.__state_model.get_all())
