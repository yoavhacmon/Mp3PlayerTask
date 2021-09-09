const player = {
  songs: [
    {
      id: 1,
      title: 'Vortex',
      album: 'Wallflowers',
      artist: 'Jinjer',
      duration: 242,
    },
    {
      id: 2,
      title: 'Vinda',
      album: 'Godtfolk',
      artist: 'Songleikr',
      duration: 160,
    },
    {
      id: 7,
      title: 'Shiroyama',
      album: 'The Last Stand',
      artist: 'Sabaton',
      duration: 213,
    },
    {
      id: 3,
      title: 'Thunderstruck',
      album: 'The Razors Edge',
      artist: 'AC/DC',
      duration: 292,
    },
    {
      id: 4,
      title: 'All is One',
      album: 'All is One',
      artist: 'Orphaned Land',
      duration: 270,
    },
    {
      id: 5,
      title: 'As a Stone',
      album: 'Show Us What You Got',
      artist: 'Full Trunk',
      duration: 259,
    },
  ],
  playlists: [
    { id: 1, name: 'Metal', songs: [1, 7, 4] },
    { id: 5, name: 'Israeli', songs: [4, 5] },
  ],
  playSong(song) {
    console.log("Playing " + song.title + " from " + song.album + " by " + song.artist + " | " + secondsToMmss(song.duration) + ".");
  },
}
//Auxiliary functions:

function secondsToMmss(duration) {
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}
function durationToSeconds(duration) {
  let mm = duration[0] + duration[1];
  let ss = duration[3] + duration[4];
  return secondDuration = (+mm * 60 + +ss);
}

function newIdFunc(id) {
  let idList = []
  for (let i of player.songs) {
    idList.push(i.id)
  }
  if (id === undefined) {
    return Math.max(...idList) + 1;
  } else if (idList.includes(id)) {
    throw "THIS ID IS TAKEN";
  } else {
    return id;
  }
}

function newIdPlaylistFunc(id) {
  let idList = []
  for (let i of player.playlists) {
    idList.push(i.id)
  }
  if (id === undefined) {
    return Math.max(...idList) + 1;
  } else if (idList.includes(id)) {
    throw "THIS ID IS TAKEN";
  } else {
    return id;
  }
}

// app functions:

function playSong(id) {
  for (let i in player.songs) {
    if (player.songs[i].id === id) {
      player.playSong(player.songs[i])
      return
    }
    else {
      throw "WRONG ID";
    }
  }
}

function removeSong(id) {
  for (let i in player.songs) {
    if (player.songs[i].id === id) {
      player.songs.splice(i, 1)


      for (let j in player.playlists) {
        if (player.playlists[j].songs.includes(id)) {
          player.playlists[j].songs.splice(player.playlists[j].songs.findIndex(item => item === id), 1)
        }
      } return
    } else {
      throw "WRONG ID";
    }
  }
}


function addSong(title, album, artist, duration, id) {

  for (let i in player.songs) {
    if (player.songs[i].id === id) {
      throw "THIS ID IS ALREDY TAKEN";
    }
  }
  let newSong = {
    'id': newIdFunc(id),
    'title': title,
    'album': album,
    'artist': artist,
    'duration': durationToSeconds(duration)
  }
  player.songs.push(newSong)
  return newSong.id;
}

function removePlaylist(id) {
  for (let i in player.playlists) {
    if (player.playlists[i].id === id) {
      player.playlists.splice(i, 1)
    }
    else {
      throw "WRONG ID";
    }
  }
}

function createPlaylist(name, id) {
  for (let i in player.playlists) {
    if (player.playlists[i].id === id) {
      throw "THIS ID IS ALREDY TAKEN";
    }
  }
  let newPlaylist = {
    'name': name,
    'id': newIdPlaylistFunc(id),
    'songs': []
  }
  player.playlists.push(newPlaylist)
  return newPlaylist.id;
}


function playPlaylist(id) {
  // your code here
}

function editPlaylist(playlistId, songId) {
  // your code here
}

function playlistDuration(id) {
  // your code here
}

function searchByQuery(query) {
  // your code here
}

function searchByDuration(duration) {
  // your code here
}

module.exports = {
  player,
  playSong,
  removeSong,
  addSong,
  removePlaylist,
  createPlaylist,
  playPlaylist,
  editPlaylist,
  playlistDuration,
  searchByQuery,
  searchByDuration,
}