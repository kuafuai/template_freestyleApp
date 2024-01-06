# Import necessary modules
from flask_restful import Resource
from database import db, TestEquipment, TestProgram
from flask import abort, request

# Define DataAnalysisResource
class DataAnalysisResource(Resource):
    def get(self):
        try:
            # Add authentication and authorization logic here
            # Example: Check if user is authenticated and authorized to access the endpoint
            if not is_authenticated(request):
                abort(401, "Unauthorized")
            if not is_authorized(request):
                abort(403, "Forbidden")
            
            # Implement pagination
            page = request.args.get('page', default=1, type=int)
            per_page = request.args.get('per_page', default=10, type=int)
            
            test_equipment_count = TestEquipment.query.paginate(page, per_page, error_out=False).total
            test_program_count = TestProgram.query.paginate(page, per_page, error_out=False).total
            
            return {'test_equipment_count': test_equipment_count, 'test_program_count': test_program_count}
        except Exception as e:
            abort(500, str(e))
