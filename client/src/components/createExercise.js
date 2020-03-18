import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
require('dotenv').config();

class CreateExercise extends Component {

    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeDuration = this.onChangeDuration.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    state = {
        name: '',
        description: '',
        duration: '',
        date: new Date(),
        users: []
    }

    componentDidMount() {
        axios.get(`${process.env.BASE_URL}users`)
            .then((res) => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map((user) => user.name),
                        name: res.data[0].name
                    })
                }
            }).catch((error) => console.log(error))
    }


    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeDescription(e) {
        this.setState({ description: e.target.value })
    }
    onChangeDuration(e) {
        this.setState({ duration: e.target.value })
    }
    onChangeDate(date) {
        this.setState({ date: date })
    }
    onSubmit(e) {
        e.preventDefault()
        const exercise = {
            name: this.state.name,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise)
        axios.post(`${process.env.BASE_URL}exercise/add`, exercise)
            .then(res => console.log(res.data))
        window.location = `${process.env.BASE_URL}`
    }
    render() {
        return (
            <div>
                <h3>Create New Exercise</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <select ref="userInput" required className="form-control"
                            value={this.state.name} onChange={this.onChangeName}>
                            {this.state.users.map((user) => {
                                return (<option key={user} value={user}> {user}</option>)
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" required className="form-control"
                            value={this.state.description} onChange={this.onChangeDescription} />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes)</label>
                        <input type="number" required className="form-control"
                            value={this.state.duration} onChange={this.onChangeDuration} />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise" className="btn btn-primary" />
                    </div>

                </form>
            </div >
        )
    }
}

export default CreateExercise;