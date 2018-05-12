from flask import Flask, request

from controllers.StatesController import StatesController
from views.IndexView import IndexView

app = Flask(__name__)


@app.route('/', methods=["GET", "POST"])
def index():
    index_view = IndexView("index.html")
    if request.method == "GET":
        return index_view.get(request)
    elif request.method == "POST":
        return index_view.post(request)


@app.route("/states", methods=["GET"])
def states():
    state_controller = StatesController()
    return state_controller.get_all()


if __name__ == '__main__':
    app.run()
