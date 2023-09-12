# TanStack Query , ReactJS Query
## Theory
 ## What is ReactJS Query?
    It is an asynchronous state management library.
    
 ## Important function.
   * 1.useQuery()
     --queryFn
     --queryKey
   * 2.useMutation()
      --mutatationFn
      --onSuccess
   * 3.useQueryClient()

 ##  NOTE: There are other usefull function and methods but these are the ones which will get you started with the TanStack Query and other will be updated on this soon

  ## Some QnA

  ### 1.What is a queryKey?
* 1. queryKey are used so that the library can internally cache your data correctly and refetch automatically when a dependency to your query changes. Query keys have to be an Array at the top level, and can be as simple as an Array with a single string, or as complex as an array of many strings and nested objects.
      you can use {exact:true} while invalidating the queries to generate for the specific type of queryKey and so that it does not make unnecessary invalidations and regenerate.

   ### 2.How many arguements does mutationFn and queryFn takes?
* 2. It takes only one arguement so if you wanna pass more than one arguement make sure to pass those arguments in a object and then pass that into the mutate method.

## Practical 
*   This App uses ReactJS query or TanStack query for caching purpose here we are using a local json server through which we are doing are CRUD operations and caching 

*  I have used the feature of useQueryClient to provide the staletime of 5 minutes in the main.jsx file. During this period the data remains fresh and does not get fetched until forced by invalidating Query.

*  There is one main page of the app by The heading TanStack Query in the app.jsx file where all the posts are being displayed (postQuery) and posts can also be added from here (newMutationPosts) and there is one another file post.jsx which holds the individual post and updatation and deletion of the post happens(updateMutationPost & deleteMutationPost ).

   
