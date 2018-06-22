import { Query } from "react-apollo";
import { compose, graphql } from 'react-apollo';
import React, { PureComponent } from 'react';
import {GET_GQL_EMPLOYEES,EMPLOADING,MUTATION_EMPLOADING} from  '../gql';
const style = {
    color: 'white',
    height: '200px'
};

// const EMPLOADING = gql`{ loading @client}`
class MainQueryEmpComp extends PureComponent {
    // constructor(props) {
    //     super(props);
    // }

    render() {

        return <Query query={GET_GQL_EMPLOYEES} >
            {({ loading, error, data }) => {
                if (loading) return (<div >Loading from Apollo express...</div>);
                if (error) return `Error! ${error.message}`;
                console.log("dta .........." + JSON.stringify(data))
                // this.props.cache.writeQuery({ query: EMPLOADING, data: { "loading": true } })
               this.props.addTODOActivity1({ variables: {  loadingStatus:true  }})
            //    this.props.addTODOActivity1()
            //this.props.addTODOActivity1({ variables: {  activityName:text ,status:'active'  }})
                console.log("loading after update .........." + JSON.stringify(this.props.cache.readQuery({ query: EMPLOADING }).loading))

                return (

                    <div style={style}>

                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            {data.empList.employees.map(employee => (
<tbody key={employee.id}>
                                <tr>
                                    <td> {employee.id} </td>
                                    <td>{employee.employee_name} </td>
                                    <td>{employee.employee_salary} </td>
                                </tr>
                                </tbody>
                            ))}

                        </table>
                        <button onClick={(e) => this.handleClick(e, data)}>
                            Call API
            </button>
                    </div>
                );
            }}
        </Query>
      
    }

    handleClick(e, data) {
      
        this.props.cache.writeQuery({ query: GET_GQL_EMPLOYEES, data })
        alert("read cache record :: :::" + JSON.stringify(this.props.cache.readQuery({ query: GET_GQL_EMPLOYEES })))
        

    }
}

// export default MainQueryEmpComp;
export default compose(graphql(MUTATION_EMPLOADING, { name: 'addTODOActivity1' }))(MainQueryEmpComp);