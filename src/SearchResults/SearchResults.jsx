import React from 'react'
import './SearchResults.css'
import {TrackList} from '../Tracklist/TrackList'

export class SearchResults extends React.Component {
  render() {
  return (
    <div className='resultsContainer'>
        <h1 className='resultTitle'>Results</h1>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false}/>
    </div>
    )
  }
}
