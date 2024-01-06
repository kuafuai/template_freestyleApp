# Import necessary modules
from flask_restful import Resource, reqparse
from database import db, TestEquipment

# Create request parser
parser = reqparse.RequestParser()
parser.add_argument('name', type=str, required=True, help='Name is required')
parser.add_argument('model', type=str, required=True, help='Model is required')
parser.add_argument('manufacturer', type=str, required=True, help='Manufacturer is required')

# Define TestEquipmentListResource
class TestEquipmentListResource(Resource):
    def get(self):
        try:
            test_equipment = TestEquipment.query.all()
            return {'test_equipment': [te.serialize() for te in test_equipment]}
        except Exception as e:
            return {'message': f'Failed to retrieve test equipment: {str(e)}'}, 500

    def post(self):
        try:
            args = parser.parse_args()
            test_equipment = TestEquipment(name=args['name'], model=args['model'], manufacturer=args['manufacturer'])
            db.session.add(test_equipment)
            db.session.commit()
            return {'message': 'Test equipment added successfully'}, 201
        except Exception as e:
            return {'message': f'Failed to add test equipment: {str(e)}'}, 500

# Define TestEquipmentResource
class TestEquipmentResource(Resource):
    def get(self, test_equipment_id):
        try:
            test_equipment = TestEquipment.query.get(test_equipment_id)
            if test_equipment:
                return test_equipment.serialize()
            else:
                return {'message': 'Test equipment not found'}, 404
        except Exception as e:
            return {'message': f'Failed to retrieve test equipment: {str(e)}'}, 500

    def put(self, test_equipment_id):
        try:
            test_equipment = TestEquipment.query.get(test_equipment_id)
            if test_equipment:
                args = parser.parse_args()
                test_equipment.name = args['name']
                test_equipment.model = args['model']
                test_equipment.manufacturer = args['manufacturer']
                db.session.commit()
                return {'message': 'Test equipment updated successfully'}
            else:
                return {'message': 'Test equipment not found'}, 404
        except Exception as e:
            return {'message': f'Failed to update test equipment: {str(e)}'}, 500

    def delete(self, test_equipment_id):
        try:
            test_equipment = TestEquipment.query.get(test_equipment_id)
            if test_equipment:
                db.session.delete(test_equipment)
                db.session.commit()
                return {'message': 'Test equipment deleted successfully'}
            else:
                return {'message': 'Test equipment not found'}, 404
        except Exception as e:
            return {'message': f'Failed to delete test equipment: {str(e)}'}, 500
