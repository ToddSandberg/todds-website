/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBlogEntry = /* GraphQL */ `mutation CreateBlogEntry(
  $input: CreateBlogEntryInput!
  $condition: ModelBlogEntryConditionInput
) {
  createBlogEntry(input: $input, condition: $condition) {
    id
    month
    year
    data
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBlogEntryMutationVariables,
  APITypes.CreateBlogEntryMutation
>;
export const updateBlogEntry = /* GraphQL */ `mutation UpdateBlogEntry(
  $input: UpdateBlogEntryInput!
  $condition: ModelBlogEntryConditionInput
) {
  updateBlogEntry(input: $input, condition: $condition) {
    id
    month
    year
    data
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBlogEntryMutationVariables,
  APITypes.UpdateBlogEntryMutation
>;
export const deleteBlogEntry = /* GraphQL */ `mutation DeleteBlogEntry(
  $input: DeleteBlogEntryInput!
  $condition: ModelBlogEntryConditionInput
) {
  deleteBlogEntry(input: $input, condition: $condition) {
    id
    month
    year
    data
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBlogEntryMutationVariables,
  APITypes.DeleteBlogEntryMutation
>;
export const createContact = /* GraphQL */ `mutation CreateContact(
  $input: CreateContactInput!
  $condition: ModelContactConditionInput
) {
  createContact(input: $input, condition: $condition) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContactMutationVariables,
  APITypes.CreateContactMutation
>;
export const updateContact = /* GraphQL */ `mutation UpdateContact(
  $input: UpdateContactInput!
  $condition: ModelContactConditionInput
) {
  updateContact(input: $input, condition: $condition) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContactMutationVariables,
  APITypes.UpdateContactMutation
>;
export const deleteContact = /* GraphQL */ `mutation DeleteContact(
  $input: DeleteContactInput!
  $condition: ModelContactConditionInput
) {
  deleteContact(input: $input, condition: $condition) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContactMutationVariables,
  APITypes.DeleteContactMutation
>;
