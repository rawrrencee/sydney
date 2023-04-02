import requests
from bs4 import BeautifulSoup
import json

url = "https://www.thecrag.com/climbing/australia/eastern-suburbs/area/1051472037"

# Send a GET request to the URL and store the response
response = requests.get(url)

# Parse the HTML content of the response using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

wall_annotations = soup.find_all('div', {'class': 'annotation'})

json_data = []
wall_ids = []

def isBlank (myString):
    return not (myString and myString.strip())

for anno in wall_annotations:
    id = anno.get('data-nid')
    title = anno.find('span', {'class': 'primary-node-name'}).text.strip()
    description = anno.find('div', {'class': 'markdown'}).text.strip()
    slug = title.lower().replace(' ', '-')

    all_routes = []
    all_siblings = anno.find_next_siblings('div')

    for sibling in all_siblings:
        if (sibling['class'][0] == 'annotation'): 
            break
        if (not isBlank(sibling.get('data-nid'))):
            all_routes.append(sibling)

    wall_routes = []
    for route in all_routes:
        routeNumber = route.find('span', {'class': 'num'}).text.strip()
        routeGrade = route.find('span', {'class': 'r-grade'}).find('span').text.strip()
        routeUrl = 'https://www.thecrag.com' + route.find('span', {'class': 'name'}).find('a').get('href')
        a_element_children = route.find('span', {'class': 'name'}).find('a').find_all('span')
        routeQuality = ''
        for child in a_element_children:
            if child.has_attr('title'):
                routeQuality = child.get('title').replace('Quality: ', '')
                break
        routeName = route.find('span', {'class': 'name'}).find('span', {'class': 'primary-node-name'}).text
        routeAscents = route.find('span', {'class': 'r-pop'}).find('a').get('title')

        route_data = { 'id': routeNumber, 'grade': routeGrade, 'url': routeUrl, 'quality': routeQuality, 'name': routeName, 'routeAscents': routeAscents }
        wall_routes.append(route_data)

    wall_data = {'id': id, 'slug': slug, 'title': title, 'description': description, 'routes': wall_routes}
    json_data.append(wall_data)

# Convert the list of JSON data to a JSON string
json_string = json.dumps(json_data)

# Print the JSON string
print(json_string)
