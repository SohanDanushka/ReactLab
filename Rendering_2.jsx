import React, {Component} from 'react';

export default class Rendering_2 extends Component{

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th></th>
                    <th>Name</th>
                    <th></th>
                    <th>Type</th>

                </tr>
                </thead>
                <tbody>
                {this.props.users.map(user  =>
                    <tr key={user.id}>

                        <td>{user.id}</td>
                        <th></th>

                        <td>{user.login}</td>
                        <td></td>
                        
                        <td>{user.type}</td>

                    </tr>
                )}
                </tbody>
            </table>
        );

    }

}