import { Component } from 'react';

const AUTHORIZEDURL = 'http://apianne.romain-pommier.com/api/auth/login';
class Authorized extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false,
    };
    this.objectRequest = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: this.props.password,
        email: this.props.email,
      }),
    };
  }
  getToken() {
    return new Promise((resolve, reject) => {
      fetch(AUTHORIZEDURL, this.objectRequest).then((response) => {
        console.log('actived');
        response.json().then((data) => {
          console.log(data);
          resolve(data);
        });
      });
    });
  }
}
export default Authorized;
