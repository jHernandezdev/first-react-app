import React from 'react'
import './GitHubUsers.css';

// Card
class Card extends React.Component {
    render() {
        return (
            <div className='github-profile'>
                <img src='http://www.gravatar.com/avatar/?d=identicon' alt='Profile'/>
                <div className='info'>
                    <div className='name'>Name here...</div>
                    <div className='company'>Company here...</div>
                </div>
            </div>
        );
    }
}


// List of cards
class GitHubUsers extends React.Component {
    //Constructor

    render () {
        return (
            <div>
                <div className='header'>{this.props.title}</div>
                <Card />
            </div>
        );
    }
}

export default GitHubUsers;