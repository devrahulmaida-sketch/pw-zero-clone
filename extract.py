import json
import os

input_file = r'R:\Rahul_files\{.txt'
output_file = r'C:\Users\LCSS\devrahulmaida-sketch\pw-zero-clone\src\data.js'

with open(input_file, 'r', encoding='utf-8') as f:
    full_json = json.load(f)

reqs = full_json.get('reqs', [])

details_data = None
schedule_data = None
ann_data = None

for req in reqs:
    u = req.get('u', '')
    rsB = req.get('rsB')
    
    if not rsB:
        continue
        
    try:
        # rsB is a JSON string, let's parse it first
        parsed_rsB = json.loads(rsB)
        
        if 'details' in u and not details_data:
            details_data = parsed_rsB
        elif 'todays-schedule' in u and not schedule_data:
            schedule_data = parsed_rsB
        elif 'announcement' in u and not ann_data:
            ann_data = parsed_rsB
    except Exception as e:
        print(f"Failed to parse rsB for {u}: {e}")

with open(output_file, 'w', encoding='utf-8') as out:
    out.write(f"export const mockDetails = {json.dumps(details_data) if details_data else 'null'};\n")
    out.write(f"export const mockSchedule = {json.dumps(schedule_data) if schedule_data else 'null'};\n")
    out.write(f"export const mockAnn = {json.dumps(ann_data) if ann_data else 'null'};\n")

print("Data extracted successfully and formatted as valid JS!")
