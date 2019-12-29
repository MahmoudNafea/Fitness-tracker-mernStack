import React, { Component } from 'react';
import Exercise from './exercise';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



class ExerciseLists extends Component {

    constructor(props) {
        super(props)
        this.deleteExercise = this.deleteExercise.bind(this)
    }
    state = { exercises: [] }

    componentDidMount() {
        axios.get('http://localhost:5000/exercise')
            .then((res) => {
                this.setState({ exercises: res.data })
            }).catch(error => console.log(error))
    }

    deleteExercise(id) {
        axios.delete('http://localhost:5000/:id')
            .then((res) => console.log(res.data))
        this.setState((prevState) => {
            return ({ exercises: prevState.exercises.filter(el => el._id !== id) })
        })
    }
    exerciseList() {
        return this.state.exercises.map(currentExercise => {
            return <Exercise exercise={currentExercise}
                deleteExercise={this.deleteExercise} key={currentExercise._id} />;
        })
    }
    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExerciseLists;