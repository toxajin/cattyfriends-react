import React, {Component} from 'react';
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component{
    constructor () {
        super()
        this.state = {
            cats: [],
            searchfield: ''
        }
    }
    OnSearchChange=(event)=>{
        this.setState({searchfield: event.target.value});
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users =>this.setState({cats: users}));
    }

    render()
    {
        const {cats, searchfield}=this.state;
        const filteredCats = cats.filter(cat=>{
            return cat.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !cats.length ?
            <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="ma2 pa1">CattyFriends</h1>
                    <SearchBox
                    searchChange={this.OnSearchChange}
                    />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList cats = {filteredCats}/>
                        </ErrorBoundry>
                    </Scroll>
                    </div>
            );
    }
}
export default App;