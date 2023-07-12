import React from 'react'
import './Playlist.css'
import {TrackList} from '../Tracklist/TrackList'

export class Playlist extends React.Component {
  constructor(props) {
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value)
  }

  render() {
  return (
      <div className='playlistContainer'>
        <form>
          <div className='playlistnamediv'>
            <input type="text" name="playlistname" id="playlistname" placeholder='Playlist name' onChange={this.handleNameChange}/>
            <hr className='playListNameBar' />
          </div>
          <TrackList className='tracklist' tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />

        </form>
        <div className='buttonContainer'>
          <button className='import' onClick={this.props.onSave}>Save to Spotify</button>
        </div>
      </div>
    )
  }
}

