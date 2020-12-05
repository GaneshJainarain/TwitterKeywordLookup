import React, {Component} from 'react'
import { Grid, Cell, ListItemContent } from 'react-mdl';

class Login extends Component {
  render() {
    return (
        <div className='pretty'>

            <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>

            <h2>LOGIN</h2>
            <div class="container">

            <form action="https://formspree.io/f/mdoplqpw" method="POST" rel="noreferrer" target="_blank">
                  <div class="row">
                    <div class="col-25">
                      <label for="username">Username</label>
                  </div>
                  <div class="col-75">
                        <input type="text" id="username" name="username" placeholder="Your username.."/>
                  </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label for="password">Password</label>
                      </div>
                      <div class="col-75">
                        <input type="text" id="password" name="password" placeholder="Your password"/>
                      </div>
                    </div>
                    
                    
                    </form>
                  </div>
                              
          </Cell>
          
        </Grid>
      </div>

        </div>
        )
  }

}


    export default Login;