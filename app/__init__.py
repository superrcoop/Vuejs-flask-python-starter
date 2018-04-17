from flask import Flask

app = Flask(__name__)
app.config.from_object(__name__)
app.config['SECRET_KEY'] 						= 'R@nd0m$t1ng'

from app import views