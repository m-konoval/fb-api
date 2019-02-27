import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class fbSing extends Component {
    state = {
        isLoggedIn: false,
        uID: null,
        name: '',
        email: '',
        avatar: null
    }

    componentClicked = () => {
        console.log('click');
    };


    responseFacebook = responce => {
        console.log(responce);
    }


    render() {
        return (
            <div>
            {
                this.state.isLoggedIn ? null :
                    (<div>
                        <FacebookLogin
                            appId="888247601368514"
                            autoLoad={false}
                            fields="name,email,picture"
                            onClick={this.componentClicked}
                            callback={this.responseFacebook} />
                    </div>)
            }
            </div>
        )
    }
}
