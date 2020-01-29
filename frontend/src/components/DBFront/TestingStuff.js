console.log('...opening /src/components/DBFront/TestingStuff.js');

import React, {
  Component
} from "react";

class TestingStuff extends Component {
  state = {
    listusers: [{
        id: 0,
        firstName: "Lucia",
        secondName: "Lou"
      },
      {
        id: 1,
        firstName: "Paul",
        secondName: "Branigade"
      },
      {
        id: 2,
        firstName: "Mike",
        secondName: "McMouse"
      },
      {
        id: 3,
        firstName: "Hellen",
        secondName: "Smith"
      },
      {
        id: 4,
        firstName: "Mary",
        secondName: "Bloody"
      },
                      {
        id: 5,
        firstName: "Jean",
        secondName: "Dean"
      }
    ]
  };

  render() {
    return (
      <div>
        <p>testing stuff...</p>
        <React.Fragment>
          <ul>
            {this.state.listusers.map(listuser => (
            <li key={listuser.id}>
              {listuser.firstName}, {listuser.secondName}
            </li>
            ))}
          </ul>
        </React.Fragment>
      </div>
    );
  }
}

export default TestingStuff;
