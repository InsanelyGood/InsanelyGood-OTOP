

import React from 'react';
import { Table } from 'reactstrap';
import '../../css/userInfo.css'
import Cookies from 'js-cookie';
import { getPurchaseProduct} from '../../api/user_infomation'
import PurchasedItems from './purchased_item'


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
    }, () => console.log("history "+this.state.product))
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
            { this.state.product && this.state.product.map( order =>
              order.purchasedList.map(item => 
                <PurchasedItems date={order.dateTime} item={item} />
                )
              ) }
          </tbody>
        </Table>
      </div>
    </div>
    );
  }

}


export default UserHistory;




