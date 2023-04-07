from bs4 import BeautifulSoup
import json
import subprocess

def isBlank (myString):
    return not (myString and myString.strip())

def switch(location):
    if location == './the-frontline.html':
        return ['./the-frontline/the-far-side.html', './the-frontline/frontline-left-hand-side.html', './the-frontline/the-corridor-boulders.html', './the-frontline/the-eastern-bloc.html', './the-frontline/the-main-wall.html', './the-frontline/front-and-centre.html', './the-frontline/frontline-right-hand-side.html', './the-frontline/montenegro-wall.html', './the-frontline/the-pee-boulder.html', './the-frontline/area-q.html', './the-frontline/roadside.html']
    elif location == './queens-park.html':
        return ['./queens-park/the-throne-room.html', './queens-park/left-hand-side.html', './queens-park/the-middle.html', './queens-park/south-end.html']
    elif location == './lindfield-rocks.html':
        return ['./lindfield-rocks/trail-boulders.html', './lindfield-rocks/first-wall.html', './lindfield-rocks/walkdown-wall.html', './lindfield-rocks/kenny-boulder.html', './lindfield-rocks/the-downclimb-slab.html', './lindfield-rocks/four-cracks-wall.html', './lindfield-rocks/abseil-wall.html', './lindfield-rocks/black-wall-wide-crack-area.html', './lindfield-rocks/one-hold-wall.html', './lindfield-rocks/pipeline-wall.html', './lindfield-rocks/bum-crack-pocketed-face.html', './lindfield-rocks/orange-face-slab-side.html', './lindfield-rocks/she-oak-wall.html', './lindfield-rocks/isolated-rock-overhang.html', './lindfield-rocks/the-overhangs.html', './lindfield-rocks/pipe-dreams.html']

# Parse the HTML content of the response using BeautifulSoup
locations = ['./the-frontline.html', './queens-park.html', './lindfield-rocks.html']

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

    areaDetails = []
    for area in switch(location):
        areaFile = open(area, 'r')
        areaSoup = BeautifulSoup(areaFile.read(), 'html.parser')
        
        areaId = areaSoup.find('body').get('data-nid')
        areaName = areaSoup.find('span', {'class': 'heading__t'}).text.strip() if areaSoup.find('span', {'class': 'heading__t'}) else ''
        areaSlug = areaName.lower().replace(' ', '-')

        areaDescription = ''
        areaDescriptions = areaSoup.find('div', {'class': 'description'}).find_all('p') if areaSoup.find('div', {'class': 'description'}) else []
        for para in areaDescriptions:
            areaDescription += para.text.strip() + '\n' if para else ''

        areaApproach = ''
        areaApproaches = areaSoup.find('div', {'class': ['approach']}).find_all('p') if areaSoup.find('div', {'class': ['approach']}) else []
        for para in areaApproaches:
            areaApproach += para.text.strip() + '\n' if para else ''

        areaRoutes = []
        routes = areaSoup.find_all('div', {'class': 'route', 'data-nid': True})
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
    
    locationData.append({'id': locationSlug, 'name': locationName, 'subtitle': None, 'imageSrc': None, 'relativePath': None, 'areas': areaDetails })


# Convert the list of JSON data to a JSON string
json_string = json.dumps(locationData)

# Print the JSON string
print(json_string)
subprocess.run("pbcopy", text=True, input=json_string)