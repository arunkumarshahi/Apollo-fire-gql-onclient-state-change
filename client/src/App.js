import React from 'react';

 import MainQueryEmpComp from './components/MainQueryEmpComp';
 import DependentQueryComp from './components/DependentQueryComp';

 
// const App = (props) => (
  class App extends React.Component {
    state={
      
  }

    render () {
      // console.log("cient ==="+JSON.stringify(this.props.client))
    return(
  <div>

<b>Data from apollo link cache</b><br/>
 <DependentQueryComp {...this.props.client}/>
<b>Data from apollo express server</b><br/>
<MainQueryEmpComp {...this.props.client}/>


{/* <ClientWithResolver/> */}
  </div>
)
}
}
export default App;
