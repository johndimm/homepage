import csv
import json
import sys 

filename = 'homepage'
if len(sys.argv) > 1: 
  filename = sys.argv[1]

print (filename)

# Open the CSV file
with open(f'{filename}.csv', 'r') as csv_file:
    # Create a CSV reader
    csv_reader = csv.DictReader(csv_file)

    # Create a list to store the JSON objects
    json_data = []

    # Iterate over the CSV rows
    for row in csv_reader:
        # Append each row (as a dictionary) to the list
        json_data.append(row)

# Open the JSON file for writing
with open(f'{filename}.json', 'w') as json_file:
    # Dump the JSON data into the file with indentation
    json.dump(json_data, json_file, indent=4)
