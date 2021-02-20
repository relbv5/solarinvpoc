/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInventoryItem = /* GraphQL */ `
  query GetInventoryItem($id: ID!) {
    getInventoryItem(id: $id) {
      id
      name
      quantity
      description
      brand
      category
      createdAt
      updatedAt
    }
  }
`;
export const listInventoryItems = /* GraphQL */ `
  query ListInventoryItems(
    $filter: ModelInventoryItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantity
        description
        brand
        category
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
