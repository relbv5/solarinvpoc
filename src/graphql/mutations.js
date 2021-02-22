/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInventoryItem = /* GraphQL */ `
  mutation CreateInventoryItem(
    $input: CreateInventoryItemInput!
    $condition: ModelInventoryItemConditionInput
  ) {
    createInventoryItem(input: $input, condition: $condition) {
      id
      name
      quantity
      description
      brand
      category
      _version
      createdAt
      updatedAt
    }
  }
`;
export const updateInventoryItem = /* GraphQL */ `
  mutation UpdateInventoryItem(
    $input: UpdateInventoryItemInput!
    $condition: ModelInventoryItemConditionInput
  ) {
    updateInventoryItem(input: $input, condition: $condition) {
      id
      name
      quantity
      description
      brand
      category
      _version
      createdAt
      updatedAt
    }
  }
`;
export const deleteInventoryItem = /* GraphQL */ `
  mutation DeleteInventoryItem(
    $input: DeleteInventoryItemInput!
    $condition: ModelInventoryItemConditionInput
  ) {
    deleteInventoryItem(input: $input, condition: $condition) {
      id
      name
      quantity
      description
      brand
      category
      _version
      createdAt
      updatedAt
    }
  }
`;
