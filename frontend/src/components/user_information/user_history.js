

import React from 'react';
import { TabContent, TabPane,  Nav, NavItem, NavLink,Button,Row, Col, Table } from 'reactstrap';
import '../../css/userInfo.css'
import Cookies from 'js-cookie';
import { getPurchaseProduct} from '../../api/user_infomation'


class UserHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '2',
      dateTime: '',
      name: '',
      image: '',
      price: '',
      description: ''
    };
  }
  async componentDidMount() {
    const prod = await getPurchaseProduct(Cookies.get('username'))
    this.setState({
        name: prod.name,
        image: prod.image,
        price: prod.price,
        description: prod.description,
        dateTime: prod.dateTime
    }, () => console.log(this.state.name+" "+this.state.price+" "+this.state.description+" "+this.state.dateTime))
  }

  handleInputChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

// handleSubmit = event => {
//     console.log(this.state.username);
//     console.log(this.state.email);
//     console.log(this.state.password);
//     console.log(this.state.address);
//     console.log(this.state.firstName);
//     console.log(this.state.lastName);
//     console.log(this.state.telephoneNumber);

//     setUsername(this.state.username, {
//         email: this.state.email,
//         username: this.state.username,
//         // password: this.state.password,
//         firstname: this.state.firstName,
//         lastname: this.state.lastName,
//         telephoneNumber: this.state.telephoneNumber,
//         address: this.state.address  
//     })
// }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
        <div  className="historyScroll">
        <Table responsive hover>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>

      </div>
    </div>
    );
  }

}


export default UserHistory;




