from flask import render_template
from flask.views import View


class BaseView(View):
    def __init__(self, template):
        self.__template = template
        self.__context = {}

    def get_context(self):
        return self.__context

    def set_context(self, context):
        self.__context = context

    def get_template(self):
        return self.__template

    def dispatch_request(self):
        return self.render_template(self.get_context())

    def render_template(self, context):
        return render_template(self.get_template(), **context)
