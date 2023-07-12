import React from 'react'
import './SearchBar.css'

export class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state={ term: "" };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  
  search() {
    this.props.onSearch(this.state.term)

  }

  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }


  render() {
  return (
    <div>
        <form>
            <input className='searchbar' type="text" name="sname" placeholder='Search for a song' onChange={this.handleTermChange} />
        </form>
        <div className='searchContainer'>
          <button className='searchbtn' onClick={this.search}>Search</button>
        </div>
    </div>
    )
  }
}
