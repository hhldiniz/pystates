from flask import Flask

from views.IndexView import IndexView

app = Flask(__name__)


@app.route('/')
def index():
    index_view = IndexView("index.html")
    return index_view.dispatch_request()


if __name__ == '__main__':
    app.run()
