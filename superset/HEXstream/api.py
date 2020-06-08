from flask_appbuilder.api import BaseApi, expose, protect, safe

class HexStreamRestApi(BaseApi):

    base_route = '/superset/'

    @expose('/hexstream', methods=['POST', 'GET'])
    # @protect(allow_browser_login=True)
    @safe
    def hexstream(self):
        return self.response(200, message="Hello")