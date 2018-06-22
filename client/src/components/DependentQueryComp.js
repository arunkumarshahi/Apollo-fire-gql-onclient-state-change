import { Query } from "react-apollo";
import React from 'react';
import {GET_CLIENT_EMPLOYEES,EMPLOADING} from  '../gql';

const DependentQueryComp = (props) =>
    (
        <Query query={GET_CLIENT_EMPLOYEES}>

            {({ data: { ...data } }) => {
                {
                    const isLoaded = props.cache.readQuery({ query: EMPLOADING }).loading;
                    console.log("loading from  consumer .........." + isLoaded)

                    if (isLoaded === true) {
                        return (
                            <div >
                                <Query query={GET_CLIENT_EMPLOYEES}>

                                    {({ data: { empList: { employees } } }) => {
                                        console.log(" data from innermost query comp::" + JSON.stringify(employees))
                                        return (


                                            <table>
                                                {employees.slice(0, 4).map(employee => (
                                                    <tbody key={employee.id}>
                                                    <tr>
                                                        <td> {employee.id} </td>
                                                        <td>{employee.employee_name} </td>
                                                    </tr>
                                                    </tbody>
                                                ))}

                                            </table>
                                           
                                        );

                                    }
                                    }
                                </Query>
                            </div>


                        );
                    }
                    else {
                        console.log("no data is called")
                        return ("Loading data from cache ...");
                    }
                }

            }}
        </Query>
    );

export default DependentQueryComp
