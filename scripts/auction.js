var auctions = [
    {
        type: 'ongoing',
        file: 'auctions/placeholder.png',
        bid: 250,
        date: new Date(2020, 6, 12),
    },
    {
        type: 'ongoing',
        file: 'auctions/placeholder.png',
        bid: 420,
        date: new Date(2020, 8, 13),
    },
    {
        type: 'ongoing',
        file: 'auctions/placeholder.png',
        bid: 69,
        date: new Date(2020, 7, 31),
    },
    {
        type: 'ongoing',
        file: 'auctions/placeholder.png',
        bid: 250,
        date: new Date(2020, 6, 12),
    },
    {
        type: 'ongoing',
        file: 'auctions/placeholder.png',
        bid: 420,
        date: new Date(2020, 8, 13),
    },
    {
        type: 'ongoing',
        file: 'auctions/placeholder.png',
        bid: 69,
        date: new Date(2020, 7, 31),
    },
    {
        type: 'upcoming',
        file: 'auctions/placeholder.png',
        date: new Date(2020, 6, 12),
    },
    {
        type: 'upcoming',
        file: 'auctions/placeholder.png',
        date: new Date(2020, 6, 12),
    },
    {
        type: 'upcoming',
        file: 'auctions/placeholder.png',
        date: new Date(2020, 6, 12),
    },
]

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
              'August', 'September', 'October', 'November', 'December'];

for(let i of auctions) {
    var div = document.createElement('DIV');
    div.className = 'listing-item';
    var img = document.createElement('IMG');
    img.className = 'listing-img';
    img.src = 'assets/' + i.file;
    var desc = document.createElement('DIV');
    desc.className = 'listing-desc';
    var date = document.createElement('P');
    date.className = 'text-mini';
    if(i.type === 'ongoing') {
        var price = document.createElement('P');
        price.className = 'text-mini';
        price.innerHTML = 'From $' + i.bid;
        desc.appendChild(price);
        // date.innerHTML = 'Closed ';
    } else {
        date.innerHTML = 'Open ';
    }
    date.innerHTML += i.date.getFullYear() + ' ' + months[i.date.getMonth()]
                      + ' ' + i.date.getDate();
    desc.appendChild(date);
    div.appendChild(img);
    div.appendChild(desc);
    document.getElementById(i.type).append(div);
}
