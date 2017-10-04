import React from 'react'

export default class Search extends React.Component {


    initialState() {
        return {
            search: "",
            results: [],
        }
    }

    render() {

        return (
            <div>
                <div>
                    <h2 className="compHeader">Search</h2>
                    <hr />
                    <form>
                        <div>
                            <p>Topic</p>
                            <input type='text' id='topicInput' onChange={this.handleChange}></input>
                            <p>Start Year</p>
                            <input type='text' id='startYear' onChange={this.handleChange}></input>
                            <p>End Year</p>
                            <input type='text' id='endYear' onChange={this.handleChange}></input>
                        </div>
                    </form>
                </div>

                <div>
                    <h2 className="compHeader">Results</h2>
                    <hr />
                    <form>
                        <div>
                            <p></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}