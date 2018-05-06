from views.BaseView import BaseView


class IndexView(BaseView):
    def __init__(self, template="index.html"):
        super().__init__(template)
