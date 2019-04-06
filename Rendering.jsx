import React, {Component} from 'react';
import Rendering_2 from './Rendering_2';

class Rendering extends Component{

    constructor(props) {
        super(props);

        this.state = {
            users:[]
        }
    }


componentDidMount() {

    fetch('https://api.github.com/users')
        .then(response => response.json())
        //.then(json => console.log(json))
        .then(json => this.setState({users: json}));

}
    render()
    {
        return (
            <div>
                <h1>Hello Git Users</h1>
                <Rendering_2 users={this.state.users} />
            </div>

        );


    }
}
export default Rendering;