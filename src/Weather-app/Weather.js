import React, { Component } from 'react'
import './Weather.css'



class App extends React.Component {

    constructor() {
        super()

        this.state = {
            apiData: {
                url: 'https://api.openweathermap.org/data/2.5/weather?q=',
                key: '26c4d8ad14b57209671494df9bd9fcb9'
            },
            timeUser: null,
            inputElem: '',
            data: [],
            continueFlag: false

        }

        this.showDate = this.showDate.bind(this)
    }

    //Show user time
    showDate() {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let timeUser = new Date()
        console.log(timeUser);
        let now = {
            day: days[timeUser.getDay()],
            month: months[timeUser.getMonth()],
            year: timeUser.getFullYear(),
            date: timeUser.getDate(),
        }
        let time = `${now.date} ${now.day} ${now.month} ${now.year}`
        this.setState({
            timeUser: time
        })
    }


    //fetch data from api
    componentDidUpdate() {
        fetch(`${this.state.apiData.url}${this.state.inputElem}&appid=${this.state.apiData.key}`)
            .then(res => res.json()) //convert type of data
            .then(data => {
                this.saveData(data)
                //recieve data and send this to show it
            })
    }

    //save data of api to show
    saveData(data) {
        let dataOfCity = {
            name: data.name,
            country: data.sys.country,
            temp: (Math.floor(data.main.temp) - 273),
            main: data.weather[0].main,
            temp_min: (Math.floor(data.main.temp_min) - 273),
            temp_max: (Math.floor(data.main.temp_max) - 273)
        }
        this.setState({
            data: dataOfCity,
            continueFlag: true
        })
    }


    //get value of input
    valueHandler(event) {
        this.setState({
            inputElem: event.target.value
        })
    }

    render() {

        return (
            <div className="app-wrap">
                <header>
                    <input type="text" onChange={this.valueHandler.bind(this)} value={this.state.inputElem} autocomplete="off" className="search-box" placeholder="Search for a city..." />
                </header>
                {!this.state.continueFlag && this.state.data.length === 0 && (<h1>please type your country</h1>)}
                {this.state.continueFlag && this.state.data && (
                    <main>
                        <section className="location">
                            <div className="city">{this.state.data.country}</div>
                            <div className="date">{this.showDate}</div>
                        </section>
                        <div className="current">
                            <div className="temp">{this.state.data.temp}<span>°c</span></div>
                            <div className="weather">{this.state.data.main}</div>
                            <div className="hi-low">{this.state.data.temp_max} °c / {this.state.data.temp_min} °c</div>
                        </div>
                    </main>
                )}


            </div>
        );
    }
}

export default App;