import React from 'react';
import '../../css/home.css'
class Quote extends React.Component {
    render(){
        return(
            <div>
           <div id="ct">
            <div className="corner "id="left_top"></div>
            <div className="corner" id="left_bottom"></div>
            <div className="corner" id="right_top"></div>
            <div className="corner" id="right_bottom"></div>
            <span className="spans">OTOPaholic.com, 2018</span>
            <blockquote>
                <p><i>&ldquo;OTOP products are the quality local products. So our team wants 
                to INCREASE sales channel of Thai products to woldwide.&rdquo; </i></p>
            </blockquote>
            </div>


            </div>
        );
  }
}
   
export default Quote;