console.log('opening...');

import React, {
  Component
} from 'react';
import Popup from "reactjs-popup";

class UserLogin extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     compName: ''
  //   }
  // }

  componentDidMount() {
    console.log(' mounted...')
  }

  render() {
    let logLabel = '';
    if (this.props.userLogStatus === true) {
      logLabel = 'Logout'
    } else {
      logLabel = 'Login'
    }

      return(
          <button onClick={this.props.onLogin}>{logLabel}</button>
      )
      
    // let popUpTrigger = <button className="btn btn-primary">{logLabel}</button>  
      
    // return (
    //     <div>
    //       <Popup trigger={popUpTrigger}
    //              position="bottom center"
    //              modal
    //       >
    //         <form onSubmit={this.props.onLogin}>
    //           <div className="form-group">
    //             {/* {/\* username *\/} */}
    //             <input className="form-control" type="text" required placeholder='username'>
    //             </input>
    //             {/* {/\* password *\/} */}
    //             <input className="form-control" type="text" required placeholder='password'>
    //             </input>
    //             <button className="btn btn-primary" type="submit">
    //               submit
    //             </button>
    //           </div>
    //         </form>
    //       </Popup>
    //     </div>
    // );
  };
};

export default UserLogin;
