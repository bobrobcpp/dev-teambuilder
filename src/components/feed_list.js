import React from 'react';
import FeedListItem from './feed_list_item';
import EXAMPLE_ARR from '../example_data';

class FeedList extends React.Component{


    constructor(props) {
    super(props)
    console.log(this.props);
    this.state = {
      feedItems: EXAMPLE_ARR
    };
  }



  render(){

    return (
      <ul >
        {this.state.feedItems.map((item) => {
          return (
            <li> {item.name} </li>
          );

          })
        }
      </ul>
    );

  }
}




export default FeedList;