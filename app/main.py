from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.trainers import ListTrainer
from flask_socketio import SocketIO

flaskApp = Flask(__name__)
flaskApp.config['SECRET_KEY'] = 'secret'
socket = SocketIO(flaskApp)
AIBot = ChatBot("Bender")
trainer = ChatterBotCorpusTrainer(AIBot)
trainer.train("chatterbot.corpus.spanish")
trainer.train("chatterbot.corpus.spanish.greetings")
trainer.train("chatterbot.corpus.spanish.conversations")

@flaskApp.route("/")
def home():    
    return render_template("home.html") 

@flaskApp.route("/get")
def get_bot_response():    
    userMsg = request.args.get('msg')    
    return str(AIBot.get_response(userMsg)) 

if __name__ == "__main__":    
    socket.run(flaskApp)