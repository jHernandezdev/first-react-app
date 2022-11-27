// gaearon, sophiebits, sebmarkbage, bvaughn
import React, { useState } from 'react'
import axios from 'axios'
import './GitHubUsers.css';

// Card
class Card extends React.Component {    
    render() {
        const profile = this.props;
        return (
            <div className='github-profile'>
                <img src={profile.avatar_url} alt='Profile'/>
                <div className='info'>
                    <div className='name'>{profile.name}</div>
                    <div className='company'>{profile.company}</div>
                </div>
            </div>
        );
    }
}

// List of cards
const CardList = (props) => {
    return (
        <div >
            {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}            
        </div>
    );
}

function NewForm(props) {
    const [inputForm, setInputForm] = useState({userName: ''});
    const handleSubmit = async (event) => {
        event.preventDefault();

        const resp = await axios.get(`https://api.github.com/users/${inputForm.userName}`);        
        props.onSubmit(resp.data);
        setInputForm({userName: ''});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder="GitHub username" 
                value={inputForm.userName}
                onChange={event => setInputForm({userName: event.target.value})}
                required />
            <button>Add Card</button>
        </form>
    );
}

// Input form
class Form extends React.Component {
    state = { userName: ''}
    handleSubmit = async (event) => {
        event.preventDefault();

        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);        
        this.props.onSubmit(resp.data);
        this.setState({userName: ''});
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    placeholder="GitHub username" 
                    value={this.state.userName}
                    onChange={event => this.setState({userName: event.target.value})}
                    required />
                <button>Add Card</button>
            </form>
        );
    }
}


class GitHubUsers extends React.Component {    
    state = {
        profiles: [],
    }
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }) )        
    }
    render () {
        return (
            <div>
                <div className='header'>{this.props.title}</div>
                <NewForm onSubmit={this.addNewProfile} />
                <Form onSubmit={this.addNewProfile} />
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }
}

export default GitHubUsers;