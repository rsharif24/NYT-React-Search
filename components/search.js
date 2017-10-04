import React from 'react'

export default class Search extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            topic: "",
            startYear: "",
            endYear: ""
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
                            <input type='text' id='topicInput'onClick={}></input>
                            <p>Start Year</p>
                            <input type='text' id='startYear'onClick={}></input>
                            <p>End Year</p>
                            <input type='text' id='endYear'onClick={}></input>
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