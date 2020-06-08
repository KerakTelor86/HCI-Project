var arts = [
    {
        'type': 'paintings',
        'file': 'paintings/placeholder.png',
        'name': 'Painting',
        'origin': 'Your mom'
    },
    {
        'type': 'sculptures',
        'file': 'sculptures/placeholder.png',
        'name': 'Scuplture',
        'origin': 'Your mom'
    },
    {
        'type': 'photographs',
        'file': 'photographs/placeholder.png',
        'name': 'Photogaph',
        'origin': 'Your mom'
    },
    {
        'type': 'paintings',
        'file': 'paintings/placeholder.png',
        'name': 'Painting',
        'origin': 'Your mom'
    },
    {
        'type': 'sculptures',
        'file': 'sculptures/placeholder.png',
        'name': 'Scuplture',
        'origin': 'Your mom'
    },
    {
        'type': 'photographs',
        'file': 'photographs/placeholder.png',
        'name': 'Photogaph',
        'origin': 'Your mom'
    },
    {
        'type': 'paintings',
        'file': 'paintings/placeholder.png',
        'name': 'Painting',
        'origin': 'Your mom'
    },
    {
        'type': 'sculptures',
        'file': 'sculptures/placeholder.png',
        'name': 'Scuplture',
        'origin': 'Your mom'
    },
    {
        'type': 'photographs',
        'file': 'photographs/placeholder.png',
        'name': 'Photogaph',
        'origin': 'Your mom'
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
    origin.innerHTML = 'From ' + i.origin;
    desc.appendChild(artName);
    desc.appendChild(origin);
    div.appendChild(img);
    div.appendChild(desc);
    document.getElementById(i.type).append(div);
}
