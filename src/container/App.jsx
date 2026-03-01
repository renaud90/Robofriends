import React from 'react'
import CardList from '../components/CardList.jsx'
import SearchBox from '../components/SearchBox.jsx'
import Scroll from '../components/Scroll.jsx'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    render() {
        const { robots, searchField } = this.state
        const filteredRobots = robots.filter(r => {
            return r.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (!robots.length) {
            return (<h1>Loading...</h1>)
        } else {
            return (
                <div className="appWrapper">
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
    }

}


export default App