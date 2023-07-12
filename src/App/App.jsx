import React from 'react'
import './App.css'
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResults/SearchResults'
import { Playlist } from '../Playlist/PLaylist'
import { Spotify } from '../util/Spotify'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
    playlistName: 'Playlist sin nombre',
    playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if( !this.state.playlistTracks.some(playlistTrack => (playlistTrack.id === track.id)) ) {
      this.state.playlistTracks.push(track);
      this.setState({playlistTracks : this.state.playlistTracks});
    }
  }

  removeTrack(track) {
    const isPresent = this.state.playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id)
    this.setState({ playlistTracks: isPresent })
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    const name = this.state.playlistName;
    Spotify.savePlaylistName(name, trackURIs).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: [],

      })
    })


  }

  async search(term) {
    console.log(`You are searching for the song ${term}`);
    Spotify.getAccessToken();
    let searchResults = await Spotify.search(term);
    this.setState({searchResults: searchResults});
  }
  
  render () {
  return (
    <div className='container'>
      <h1 className='title'>Mi<span>xs</span>ter</h1>
      <SearchBar onSearch={this.search}/>
      <div className='resultContainer'>
        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
      </div>
    </div>
    );
  }
} 

export default App
