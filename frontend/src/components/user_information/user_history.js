

import React from 'react';
import { Table } from 'reactstrap';
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
        product: prod
    }, () => console.log("history "+this.state.product[0].purchasedList))
  }

  handleInputChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

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
          <thead>
            <tr>
              
            </tr>
          </thead>
            <tr>
              <th scope="row">1</th>
              <td>2hhhh</td>
              <td>nnnn</td>
              <td>4nnnnn</td>
            </tr>
            
          </tbody>
        </Table>

      </div>
    </div>
    );
  }

}


export default UserHistory;




