import {EMPLOADING} from '../gql'
export  const addTODOActivity= (_obj, {loadingStatus}, { cache}) => {
      //  const id = getCacheKey({ __typename: 'TodoItem', id: variables.id })
      console.log("addTODOActivity ...");
      const previousState = cache.readQuery({ query:EMPLOADING });
      console.log(" data in resolver...."+JSON.stringify(previousState))
      console.log(" data in resolver...."+JSON.stringify(previousState)+":::loadingStatus::::"+loadingStatus)
      cache.writeQuery({ query: EMPLOADING, data: { "loading": loadingStatus } })
        //const todo = cache.readFragment({ fragment, id });
        //const data = { ...todo, completed: !todo.completed };
        //cache.writeDat({ id, data });
       // cache.writeQuery({ query: MUTATION_EMPLOADING, data: { "loading": true } })
        //  cache.writeQuery({ query: MUTATION_EMPLOADING, data: { "loading": true } })

         const previousState1 = cache.readQuery({ query:EMPLOADING });
      console.log(" data in resolver after update...."+JSON.stringify(previousState1))


        return null;
      };    