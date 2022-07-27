
/*
This is an example snippet - you should consider tailoring it
to your service.

Note: we only handle the first operation here
*/

function fetchGraphQL(
  operationsDoc: string,
  operationName: string,
  variables: Record<string, any>
) {
  return fetch('undefined', {
    method: 'POST',
    body: JSON.stringify({
      query: operationsDoc,
      variables,
      operationName,
    }),
    headers: {
      "x-hasura-admin-secret": "Yr1mw58ZZaU2kva6JNTdcqOzUj233TxxkUJYMcTzgvb2YHtIzmDj81MWlmhCpn8v"
    }
  }).then(result => result.json());
}

const operation = `
  mutation InsertUser($userEmail: String!, $userName: String!, $userUuid: String!) {
    insert_users_one(object: {user_email: $userEmail, user_name: $userName, user_uuid: $userUuid}) {
      user_email
      user_name
      user_uuid
    }
  }
`;

function insertUser(userEmail: string, userName: string, userUuid: string) {
  return fetchGraphQL(operation, "InsertUser", { "userEmail": userEmail, "userName": userName, "userUuid": userUuid })
}
