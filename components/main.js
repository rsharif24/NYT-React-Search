import React from 'react'
import Search from './search'
import Saved from './saved'

export default class Search extends React.Component {
    render() {
        <div id="wrapper">
            <header>
                <h1>New York Times Article Scrubber</h1>
                <hr />
                <h4>Search for and annotate articles of interest!</h4>
            </header>
            <div id="container">
                <Search />
                <Saved />
            </div>
        </div>
    }
}

export default Main
