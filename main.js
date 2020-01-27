const playlistBlock = document.getElementById('playlistBlock');
const fragment = document.createDocumentFragment();

function createSong(data) {
    const { image, author, name, time } = data;

    const divSong = document.createElement('div');
    divSong.classList = "song";
    divSong.onclick = () => setSongToPlayer(data);

    const divSinger = document.createElement('div');
    divSinger.classList = "singer";

    const albumImage = document.createElement('img');
    albumImage.classList = "grandeimg";
    albumImage.src = image

    const divSongsing = document.createElement('div');
    divSongsing.classList = "songsing";

    const spanAuthor = document.createElement('span');
    spanAuthor.classList = "author";
    spanAuthor.innerText = author;

    const spanName = document.createElement('span');
    spanName.classList = "name";
    spanName.innerText = name;

    const divTime = document.createElement('div');
    divTime.classList = "time";

    const spanTime = document.createElement('span');
    spanTime.innerText = time;

    divSinger.appendChild(albumImage);
    divSongsing.appendChild(spanAuthor);
    divSongsing.appendChild(spanName);
    divTime.appendChild(spanTime);

    divSong.appendChild(divSinger);
    divSong.appendChild(divSongsing);
    divSong.appendChild(divTime);

    fragment.appendChild(divSong);
};

function setSongToPlayer(data) {
    const player = document.getElementById('playerBlock');

    const authorName = player.querySelector('.author');
    authorName.innerText = data.author;
    const songName = player.querySelector('.name');
    songName.innerText = data.name;
}

const dataObject = [
    {
        image: 'images/album1.png', 
        author: 'ariana grande', 
        name: 'deydreaming', 
        time: '3:45',
    },
    {
        image: 'images/album1.png', 
        author: 'ariana', 
        name: 'dey', 
        time: '2:45',
    },
    {
        image: 'images/album1.png', 
        author: 'grande', 
        name: 'dreaming', 
        time: '3:10'
    },
    {
        image: 'images/album1.png', 
        author: 'ariana grande', 
        name: 'deydreaming', 
        time: '3:45',
    },
    {
        image: 'images/album1.png', 
        author: 'ariana', 
        name: 'dey', 
        time: '2:45',
    },
    {
        image: 'images/album1.png', 
        author: 'grande', 
        name: 'dreaming', 
        time: '3:10'
    },
    {
        image: 'images/album1.png', 
        author: 'ariana grande', 
        name: 'deydreaming', 
        time: '3:45',
    },
    {
        image: 'images/album1.png', 
        author: 'ariana', 
        name: 'dey', 
        time: '2:45',
    },
    {
        image: 'images/album1.png', 
        author: 'grande', 
        name: 'dreaming', 
        time: '3:10'
    },
    {
        image: 'images/album1.png', 
        author: 'ariana grande', 
        name: 'deydreaming', 
        time: '3:45',
    },
    {
        image: 'images/album1.png', 
        author: 'ariana', 
        name: 'dey', 
        time: '2:45',
    },
    {
        image: 'images/album1.png', 
        author: 'grande', 
        name: 'dreaming', 
        time: '3:10'
    },
    {
        image: 'images/album1.png', 
        author: 'ariana grande', 
        name: 'deydreaming', 
        time: '3:45',
    },
    {
        image: 'images/album1.png', 
        author: 'ariana', 
        name: 'dey', 
        time: '2:45',
    },
    {
        image: 'images/album1.png', 
        author: 'grande', 
        name: 'dreaming', 
        time: '3:10'
    },
];

dataObject.map(item => {
    createSong(item);
});

playlistBlock.appendChild(fragment);