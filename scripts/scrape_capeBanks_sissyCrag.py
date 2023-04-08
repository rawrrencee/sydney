from bs4 import BeautifulSoup
import json
import subprocess

def isBlank (myString):
    return not (myString and myString.strip())

locations = ['./cape-banks.html', './sissy-crag.html']

locationData = []
for location in locations:
    locationFile = open(location, 'r')
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

    areas = soup.find_all('div', {'class': 'annotation'})

    areaDetails = []
    for area in areas:
        id = area.get('data-nid')
        title = area.find('span', {'class': 'primary-node-name'}).text.strip()
        description = area.find('div', {'class': 'markdown'}).text.strip() if area.find('div', {'class': 'markdown'}) else ''
        slug = title.lower().replace(' ', '-')

        allRoutes = []
        allSiblings = area.find_next_siblings('div')

        for sibling in allSiblings:
            if (sibling['class'][0] == 'annotation'): 
                break
            if (not isBlank(sibling.get('data-nid'))):
                allRoutes.append(sibling)

        areaRoutes = []
        for route in allRoutes:
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
            routeDescription = route.find('div', {'class': 'markdown'}).find('p').text if route.find('div', {'class': 'markdown'}).find('p') else ''
            routeData = { 'id': routeNumber, 'grade': routeGrade, 'url': routeUrl, 'quality': routeQuality, 'name': routeName, 'ascents': routeAscents, 'description': routeDescription, 'imageSrc': None, 'relativePath': None }
            areaRoutes.append(routeData)

        areaData = {'id': id, 'slug': slug, 'title': title, 'description': description, 'imageSrc': None, 'relativePath': None, 'routes': areaRoutes}
        areaDetails.append(areaData)

    locationData.append({'id': locationSlug, 'name': locationName, 'subtitle': None, 'imageSrc': None, 'relativePath': None, 'areas': areaDetails })

# Convert the list of JSON data to a JSON string
json_string = json.dumps(locationData)

# Print the JSON string
print(json_string)
subprocess.run("pbcopy", text=True, input=json_string)
