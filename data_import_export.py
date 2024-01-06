# Import necessary modules
from flask_restful import Resource
from database import db, TestEquipment, TestProgram
import os

# Define DataImportExportResource
class DataImportExportResource(Resource):
    def get(self):
        test_equipment = TestEquipment.query.all()
        test_program = TestProgram.query.all()
        # Export data to file
        try:
            with open('exported_data.txt', 'w') as file:
                file.write('Test Equipment:\n')
                for equipment in test_equipment:
                    file.write(f'{equipment.name}, {equipment.serial_number}\n')
                file.write('\nTest Program:\n')
                for program in test_program:
                    file.write(f'{program.name}, {program.version}\n')
            return {'message': 'Data exported successfully'}
        except Exception as e:
            return {'message': f'Error exporting data: {str(e)}'}, 500

    def post(self):
        # Import data from file
        try:
            if not os.path.exists('imported_data.txt'):
                return {'message': 'Import file does not exist'}, 400
            with open('imported_data.txt', 'r') as file:
                lines = file.readlines()
                test_equipment = []
                test_program = []
                is_test_equipment = False
                is_test_program = False
                for line in lines:
                    if line.strip() == 'Test Equipment:':
                        is_test_equipment = True
                        is_test_program = False
                    elif line.strip() == 'Test Program:':
                        is_test_equipment = False
                        is_test_program = True
                    elif is_test_equipment:
                        equipment_data = line.strip().split(',')
                        test_equipment.append(TestEquipment(name=equipment_data[0], serial_number=equipment_data[1]))
                    elif is_test_program:
                        program_data = line.strip().split(',')
                        test_program.append(TestProgram(name=program_data[0], version=program_data[1]))
                db.session.bulk_save_objects(test_equipment)
                db.session.bulk_save_objects(test_program)
                db.session.commit()
            return {'message': 'Data imported successfully'}, 201
        except Exception as e:
            return {'message': f'Error importing data: {str(e)}'}, 500
