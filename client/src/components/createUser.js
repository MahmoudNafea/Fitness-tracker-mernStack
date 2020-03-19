import React, { Component } from 'react';
import axios from 'axios'
require('dotenv').config();


class CreateUser extends Component {

    constructor(props) {
        super(props)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    state = { username: '' }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.username
        }
        console.log(user)
        axios.post(`${process.env.REACT_APP_BASE_URL}/users/add`, user)
            .then(res => console.log(res.data))
        this.setState({ username: '' })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" required className="form-control"
                            value={this.state.username} onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Create User</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser;