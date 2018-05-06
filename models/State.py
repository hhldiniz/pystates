from utils.MongoDBController import MongoDBController


class State:
    def __init__(self, name="", population=0, pib=0):
        self.__name = name
        self.__population = population
        self.__pib = pib

    def set_name(self, name):
        self.__name = name

    def get_name(self):
        return self.__name

    def set_population(self, population):
        self.__population = population

    def get_population(self):
        return self.__population

    def set_pib(self, pib):
        self.__pib = pib

    def get_pib(self):
        return self.__pib

    @staticmethod
    def get_all():
        db_client = MongoDBController()
        db = db_client.get_database(database_name="pystates")
        collection = db["states"]
        result = []
        for obj in collection.find():
            result.append(obj)
        return result

    @staticmethod
    def get_one(obj_filter=None):
        if obj_filter is None:
            obj_filter = {}
        db_client = MongoDBController()
        db = db_client.get_database(database_name="pystates")
        collection = db["states"]
        return collection.find_one(obj_filter)

    @staticmethod
    def get_by_filter(obj_filter=None):
        if obj_filter is None:
            obj_filter = {}
        db_client = MongoDBController()
        db = db_client.get_database(database_name="pystates")
        collection = db["states"]
        result = []
        for obj in collection.find(obj_filter):
            result.append(obj)
        return result

    def save(self):
        name = self.get_name()
        population = self.get_population()
        pib = self.get_pib()
        db_client = MongoDBController()
        db = db_client.get_database(database_name="pystates")
        collection = db["states"]
        obj_to_insert = {name: name, population: population, pib: pib}
        return collection.insert_one(obj_to_insert)
