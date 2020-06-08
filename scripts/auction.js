var auctions = [
    {
        type: 'ongoing',
        file: 'auctions/great_wave_off_kanagawa.jpg',
        bid: 250,
        date: new Date(2020, 6, 12),
    },
    {
        type: 'ongoing',
        file: 'auctions/wp2643399-fine-art-wallpaper-hd.jpg',
        bid: 420,
        date: new Date(2020, 8, 13),
    },
    {
        type: 'ongoing',
        file: 'auctions/187.jpg',
        bid: 69,
        date: new Date(2020, 7, 31),
    },
    {
        type: 'ongoing',
        file: 'auctions/the-persistence-of-memory.jpg',
        bid: 250,
        date: new Date(2020, 6, 12),
    },
    {
        type: 'ongoing',
        file: 'auctions/luteplayer_v2.jpg',
        bid: 420,
        date: new Date(2020, 8, 13),
    },
    {
        type: 'ongoing',
        file: 'auctions/9870331_horse-head-metal-art-2-mari9art.jpg',
        bid: 69,
        date: new Date(2020, 7, 31),
    },
    {
        type: 'upcoming',
        file: 'auctions/additional_eb195522e27119929812715efd380494061243c8-8.jpg',
        date: new Date(2020, 6, 12),
    },
    {
        type: 'upcoming',
        file: 'auctions/starry_night_full.jpg',
        date: new Date(2020, 6, 12),
    },
    {
        type: 'upcoming',
        file: 'auctions/the-void_1920.jpg',
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
