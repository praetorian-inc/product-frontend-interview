import os

from flask import Flask
import json


def create_app(test_config=None):
  # create and configure the app
  app = Flask(__name__, instance_relative_config=True)
  app.config.from_mapping(
    SECRET_KEY='dev',
  )

  # a simple page that says hello
  @app.route('/api/v1/vulnerability')
  def get_all_vulnerabilities():
    with open("vulnerabilities.json", "r") as fd:
      data = fd.read()

      all_vulnerabilities = json.loads(data)
      return str(all_vulnerabilities)


  return app
