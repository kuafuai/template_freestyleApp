# Import necessary modules
from flask_restful import Resource
from database import db, TestEquipment, TestProgram
from flask import abort, request

# Define DataAnalysisResource
class DataAnalysisResource(Resource):
    def get(self):
        try:
            # Add authentication and authorization logic here
            # Example: Check if user is authenticated and authorized
            if not is_authenticated(request):
                abort(401, 'Unauthorized')
            if not is_authorized(request):
                abort(403, 'Forbidden')
            
            # Implement pagination
            page = request.args.get('page', default=1, type=int)
            per_page = request.args.get('per_page', default=10, type=int)
            
            test_equipment_count = TestEquipment.query.count()
            test_program_count = TestProgram.query.count()
            
            test_equipment = TestEquipment.query.paginate(page=page, per_page=per_page)
            test_program = TestProgram.query.paginate(page=page, per_page=per_page)
            
            return {
                'test_equipment_count': test_equipment_count,
                'test_program_count': test_program_count,
                'test_equipment': [item.serialize() for item in test_equipment.items],
                'test_program': [item.serialize() for item in test_program.items],
                'pagination': {
                    'page': test_equipment.page,
                    'per_page': test_equipment.per_page,
                    'total_pages': test_equipment.pages,
                    'total_items': test_equipment.total
                }
            }
        except Exception as e:
            abort(500, str(e))
