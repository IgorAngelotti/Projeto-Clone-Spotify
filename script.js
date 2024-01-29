const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylists = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

function displayResults(result) {
    esconderPlaylist()
    const artistsName = document.getElementById('artist-name');
    const artistsImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistsName.innerText = element.name;
        artistsImage.src = element.urlImg;
    });
    resultArtists.classList.remove('hidden');
}

function esconderPlaylist() {
    resultPlaylists.classList.add('hidden');
}

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylists.classList.remove('hidden');
        resultArtists.classList.add('hidden');
        return
    }

    requestApi(searchTerm);
});


