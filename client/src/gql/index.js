import gql from 'graphql-tag'
export const EMPLOADING = gql`{ loading @client}`
export const MUTATION_EMPLOADING=gql`
mutation addTODOActivity($loadingStatus: Boolean!) {
    addTODOActivity(loadingStatus: $loadingStatus) @client {
        loadingStatus
  }
}
`
// export const addTODO = gql`
//   mutation addTODOActivity($activityName: String!,$status: String!) {
//     addTODOActivity(activityName: $activityName,status: $status) @client {
//       activityName
//     }
//   }
// `;
export const GET_GQL_EMPLOYEES = gql`
query {
    empList(name:"AK") {
      
      employees{
       id
       employee_name
       employee_salary
      }
      }   
   }
`

export const GET_CLIENT_EMPLOYEES = gql`
query {
    empList(name:"AK") @client{
 
      employees {
          id
          employee_name
      }
      }   
   }
`