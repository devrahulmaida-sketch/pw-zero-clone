import json

details_data = None
schedule_data = None
ann_data = None

with open(r'R:\Rahul_files\{.txt', encoding='utf-8') as f:
    for line in f:
        try:
            d = json.loads(line)
            u = d.get('u', '')
            if 'details' in u and not details_data:
                details_data = d.get('rsB')
            elif 'todays-schedule' in u and not schedule_data:
                schedule_data = d.get('rsB')
            elif 'announcement' in u and not ann_data:
                ann_data = d.get('rsB')
        except:
            pass

with open(r'C:\Users\LCSS\devrahulmaida-sketch\pw-zero-clone\src\data.js', 'w', encoding='utf-8') as out:
    out.write(f"export const mockDetails = {details_data if details_data else 'null'};\n")
    out.write(f"export const mockSchedule = {schedule_data if schedule_data else 'null'};\n")
    out.write(f"export const mockAnn = {ann_data if ann_data else 'null'};\n")
