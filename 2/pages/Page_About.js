import React from 'react';

import CategoryWrapper from '../components/CategoryWrapper';

import appData from '../appData';

import './PageAbout.css';

class Page_About extends React.PureComponent {

  render() {
console.log(appData.header);
    return (
      <CategoryWrapper
        header={appData.header}
        categories={appData.categoryInfo}
      />
      );
  }

}

export default Page_About;