
import React, { Component } from 'react';
import IntroductionInfo from './IntroductionInfo';

class IntroductionInfoList extends Component<any> {
  static defaultProps = {
    data: []
  }

  render() {
    const  data  = this.props;
    const list = data.map(
      (info:any) => (<IntroductionInfoList key={info.id} info={info}/>)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default IntroductionInfoList;