from flask import Blueprint, request, jsonify, abort
from app.models import Plane, Report, db

bp = Blueprint('api', __name__, url_prefix='/api')

# ---------- PLANES ----------
@bp.route('/planes/', methods=['GET'])
def get_planes():
    planes = Plane.query.all()
#    planes = [{"id":"1","name": "D-5318", "model":"Ka6", "manufacturer":"Alexander Schleicher"}]
    return jsonify([{
        'id': plane.id,
        'name': plane.name,
        'model': plane.model,
        'manufacturer': plane.manufacturer
    } for plane in planes])
    #return {'time': time.time()}
 

@bp.route('/plane/<int:id>', methods=['GET'])
def get_plane(id):
    plane = Plane.query.get_or_404(id)
    return jsonify({
        'id': plane.id,
        'name': plane.name,
        'model': plane.model,
        'manufacturer': plane.manufacturer
    })

@bp.route('/plane/<int:id>', methods=['POST'])
def post_plane(id):
    data = request.json
    plane = Plane.query.get(id)
    if not plane:
        # Create a new plane
        plane = Plane(
            id=id,
            name=data['name'],
            model=data['model'],
            manufacturer=data['manufacturer']
        )
        db.session.add(plane)
    else:
        # Update existing plane
        plane.name = data['name']
        plane.model = data['model']
        plane.manufacturer = data['manufacturer']
    db.session.commit()
    return jsonify({'message': 'Plane saved successfully!', 'id': plane.id}), 200

# ---------- REPORTS ----------
@bp.route('/plane/reports', methods=['GET'])
def get_reports():
    reports = Report.query.all()
    return jsonify([{
        'id': report.id,
        'plane_id': report.plane_id,
        'date': report.date.strftime('%Y-%m-%d')
    } for report in reports])

@bp.route('/plane/report/<int:id>', methods=['GET'])
def get_report(id):
    report = Report.query.get_or_404(id)
    return jsonify({
        'id': report.id,
        'plane_id': report.plane_id,
        'date': report.date.strftime('%Y-%m-%d'),
        'tasks': [{
            'id': task.id,
            'description': task.task_description,
            'fix_description': task.fix_description,
            'reference': task.reference,
            'executor': task.executor
        } for task in report.tasks]
    })

@bp.route('/plane/report/<int:id>', methods=['POST'])
def post_report(id):
    data = request.json
    report = Report.query.get(id)
    if not report:
        # Create a new report
        report = Report(
            id=id,
            plane_id=data['plane_id'],
            date=data['date']
        )
        db.session.add(report)
    else:
        # Update an existing report
        report.plane_id = data['plane_id']
        report.date = data['date']
        report.tasks.clear()
        for task_data in data['tasks']:
            task = Task(
                task_description=task_data['description'],
                fix_description=task_data['fix_description'],
                reference=task_data['reference'],
                executor=task_data['executor']
            )
            report.tasks.append(task)
    db.session.commit()
    return jsonify({'message': 'Report saved successfully!', 'id': report.id}), 200

