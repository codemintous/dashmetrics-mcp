import json
import jsonschema
from jsonschema import validate

def validate_json(json_file, schema_file):
    try:
        # Load the JSON file
        with open(json_file, 'r') as f:
            json_data = json.load(f)
        
        # Load the schema file
        with open(schema_file, 'r') as f:
            schema_data = json.load(f)
        
        # Validate the JSON against the schema
        validate(instance=json_data, schema=schema_data)
        print("✅ Validation successful! The JSON file is valid according to the schema.")
        return True
    except jsonschema.exceptions.ValidationError as e:
        print("❌ Validation failed!")
        print(f"Error: {e.message}")
        print(f"Path: {' -> '.join(str(p) for p in e.path)}")
        return False
    except Exception as e:
        print(f"❌ An error occurred: {str(e)}")
        return False

if __name__ == "__main__":
    json_file = "submissions/20250503/dashmetrics-mcp.json"
    schema_file = "submission_schema.json"
    
    print(f"Validating {json_file} against {schema_file}...")
    validate_json(json_file, schema_file) 