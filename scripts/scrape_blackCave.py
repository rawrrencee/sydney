from bs4 import BeautifulSoup
import json
import subprocess

def isBlank (myString):
    return not (myString and myString.strip())

# Parse the HTML content of the response using BeautifulSoup

locationFile = open('./black-cave.html', 'r')
soup = BeautifulSoup(locationFile.read(), 'html.parser')

locationName = soup.find('span', {'class': 'heading__t'}).text.strip() if soup.find('span', {'class': 'heading__t'}) else ''
locationSlug = locationName.lower().replace(' ', '-')

locationDescription = ''
locationDescriptions = soup.find('div', {'class': 'description'}).find_all('p') if soup.find('div', {'class': 'description'}) else []
for para in locationDescriptions:
    locationDescription += para.text + '\n' if para else ''

locationApproach = ''
locationApproaches = soup.find('div', {'class': 'approach'}).find_all('p')
for para in locationApproaches:
    locationApproach += para.text + '\n' if para else ''

areaId = soup.find('body').get('data-nid')
areaName = soup.find('span', {'class': 'heading__t'}).text.strip() if soup.find('span', {'class': 'heading__t'}) else ''
areaSlug = areaName.lower().replace(' ', '-')
areaDescription = ''
areaDescriptions = soup.find('div', {'class': 'description'}).find_all('p') if soup.find('div', {'class': 'description'}) else []
for para in areaDescriptions:
    areaDescription += para.text.strip() + '\n' if para else ''

areaApproach = ''
areaApproaches = soup.find('div', {'class': ['approach']}).find_all('p') if soup.find('div', {'class': ['approach']}) else []
for para in areaApproaches:
    areaApproach += para.text.strip() + '\n' if para else ''

areaDetails = []
areaRoutes = []
routes = soup.find_all('div', {'class': 'route', 'data-nid': True})
for route in routes:
    routeNumber = route.find('span', {'class': 'num'}).text.strip() if route.find('span', {'class': 'num'}) else ''
    routeGrade = route.find('span', {'class': 'r-grade'}).find('span').text.strip() if route.find('span', {'class': 'r-grade'}) else ''
    routeUrl = 'https://www.thecrag.com' + route.find('span', {'class': 'name'}).find('a').get('href')
    a_element_children = route.find('span', {'class': 'name'}).find('a').find_all('span')
    routeQuality = ''
    for child in a_element_children:
        if child.has_attr('title'):
            routeQuality = child.get('title').replace('Quality: ', '')
            break
    routeName = route.find('span', {'class': 'name'}).find('span', {'class': 'primary-node-name'}).text
    routeAscents = route.find('span', {'class': 'r-pop'}).find('a').get('title')
    routeData = { 'id': routeNumber, 'grade': routeGrade, 'url': routeUrl, 'quality': routeQuality, 'name': routeName, 'ascents': routeAscents, 'imageSrc': None, 'relativePath': None }
    areaRoutes.append(routeData)

areaData = {'id': areaId, 'slug': areaSlug, 'title': areaName, 'description': areaDescription, 'imageSrc': None, 'relativePath': None, 'routes': areaRoutes }
areaDetails.append(areaData)

# Convert the list of JSON data to a JSON string
json_string = json.dumps({'id': locationSlug, 'name': locationName, 'subtitle': None, 'imageSrc': None, 'relativePath': None, 'areas': areaDetails })

# Print the JSON string
print(json_string)
subprocess.run("pbcopy", text=True, input=json_string)