# Import necessary modules
from flask_restful import Resource, reqparse
from database import db, TestProgram

# Create request parser
parser = reqparse.RequestParser()
parser.add_argument('name', type=str, required=True, help='Name is required')
parser.add_argument('description', type=str, required=True, help='Description is required')
parser.add_argument('version', type=str, required=True, help='Version is required')

# Define TestProgramListResource
class TestProgramListResource(Resource):
    def get(self):
        try:
            test_programs = TestProgram.query.all()
            return {'test_programs': [tp.serialize() for tp in test_programs]}
        except Exception as e:
            return {'message': str(e)}, 500

    def post(self):
        try:
            args = parser.parse_args()
            test_program = TestProgram(name=args['name'], description=args['description'], version=args['version'])
            db.session.add(test_program)
            db.session.commit()
            return {'message': 'Test program added successfully'}, 201
        except Exception as e:
            return {'message': str(e)}, 500

# Define TestProgramResource
class TestProgramResource(Resource):
    def get(self, test_program_id):
        try:
            test_program = TestProgram.query.get(test_program_id)
            if test_program:
                return test_program.serialize()
            else:
                return {'message': 'Test program not found'}, 404
        except Exception as e:
            return {'message': str(e)}, 500

    def put(self, test_program_id):
        try:
            test_program = TestProgram.query.get(test_program_id)
            if test_program:
                args = parser.parse_args()
                test_program.name = args['name']
                test_program.description = args['description']
                test_program.version = args['version']
                db.session.commit()
                return {'message': 'Test program updated successfully'}
            else:
                return {'message': 'Test program not found'}, 404
        except Exception as e:
            return {'message': str(e)}, 500

    def delete(self, test_program_id):
        try:
            test_program = TestProgram.query.get(test_program_id)
            if test_program:
                db.session.delete(test_program)
                db.session.commit()
                return {'message': 'Test program deleted successfully'}
            else:
                return {'message': 'Test program not found'}, 404
        except Exception as e:
            return {'message': str(e)}, 500
