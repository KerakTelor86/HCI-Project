var arts = [
    {
        'type': 'paintings',
        'file': 'paintings/Campers-Haven001-wix-bookings.jpg',
        'name': 'Camper\'s Haven',
        'origin': 'Bob Ross'
    },
    {
        'type': 'sculptures',
        'file': 'sculptures/winter_warriors_wolf_sculpture__79621.1491404876.jpg',
        'name': 'Winter Warriors',
        'origin': 'USA'
    },
    {
        'type': 'photographs',
        'file': 'photographs/Bliss.jpg',
        'name': 'Bliss',
        'origin': 'Charles O\'Rear'
    },
    {
        'type': 'paintings',
        'file': 'paintings/mona.jpg',
        'name': 'Mona Lisa',
        'origin': 'Leonardo da Vinci'
    },
    {
        'type': 'sculptures',
        'file': 'sculptures/42547898_1_x.jpg',
        'name': 'Le Hibou the Owl',
        'origin': 'France'
    },
    {
        'type': 'photographs',
        'file': 'photographs/windows-xp-azul-1600x1200.jpg',
        'name': 'Azul',
        'origin': 'Bill Ross'
    },
    {
        'type': 'paintings',
        'file': 'paintings/lecridemunch.jpg',
        'name': 'Der Schrei der Natur',
        'origin': 'Edvard Munch'
    },
    {
        'type': 'sculptures',
        'file': 'sculptures/1799823.jpeg',
        'name': 'Kokoa',
        'origin': 'Japan'
    },
    {
        'type': 'photographs',
        'file': 'photographs/mine.jpg',
        'name': 'Idk Name It',
        'origin': 'Me'
    },
]

for(let i of arts) {
    var div = document.createElement('DIV');
    div.className = 'listing-item';
    var img = document.createElement('IMG');
    img.className = 'listing-img';
    img.src = 'assets/' + i.file;
    var desc = document.createElement('DIV');
    desc.className = 'listing-desc';
    var artName = document.createElement('P');
    artName.className = 'text-mini';
    artName.innerHTML = i.name;
    var origin = document.createElement('P');
    origin.className = 'text-mini';
    origin.innerHTML = i.origin;
    desc.appendChild(artName);
    desc.appendChild(origin);
    div.appendChild(img);
    div.appendChild(desc);
    document.getElementById(i.type).append(div);
}
