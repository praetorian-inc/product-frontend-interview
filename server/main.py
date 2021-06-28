import os

from flask import Flask
import json
import time

def create_app(test_config=None):
  # create and configure the app
  app = Flask(__name__, instance_relative_config=True)
  app.config.from_mapping(
    SECRET_KEY='dev',
  )

  @app.route('/api/v1/vulnerability')
  def get_all_vulnerabilities():
    with open("vulnerabilities.json", "r") as fd:
      data = fd.read()

      time.sleep(4)
      all_vulnerabilities = json.loads(data)
      return json.dumps(all_vulnerabilities)

  @app.route('/api/v1/vulnerability/<vulnerabilityId>')
  def get_vulnerability(vulnerabilityId):
    with open("vulnerabilities.json", "r") as fd:
      data = fd.read()

      all_vulnerabilities = json.loads(data)
      vulns_with_id = [v for v in all_vulnerabilities if v["id"] == vulnerabilityId]

      if (len(vulns_with_id) == 0):
        return "null"
      else:
        return json.dumps(vulns_with_id[0])

      return str(all_vulnerabilities)

  return app
