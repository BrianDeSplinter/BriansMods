import React, {Component} from 'react'
import './About.css'

class About extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return(
            <div className=''>
                <h3>
                    About Us!
                </h3>
                <div className='aboutInfo'>
                    <p>
                    Here at Brian's Mods we have curated a list of all the best mods and upgrades for your BMW e9x. Brian's Mods was created as a personal project for my Web Development course at DevMountain. It is a website designed to sell mods that I have chosen for the BMW e9x platform. I'm passionate about BMW's and if you are too and have a e9x check out the store for ways to make your car faster and perform better, like an Ultimate Driving Machine should!
                    </p>
                </div>   
            </div>
        )
    }
}

export default About