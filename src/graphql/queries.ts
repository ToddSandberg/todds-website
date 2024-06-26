/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getBlogEntry = /* GraphQL */ `query GetBlogEntry($id: ID!) {
  getBlogEntry(id: $id) {
    id
    month
    year
    data
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBlogEntryQueryVariables,
  APITypes.GetBlogEntryQuery
>;
export const listBlogEntries = /* GraphQL */ `query ListBlogEntries(
  $filter: ModelBlogEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      month
      year
      data
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBlogEntriesQueryVariables,
  APITypes.ListBlogEntriesQuery
>;
export const getContact = /* GraphQL */ `query GetContact($id: ID!) {
  getContact(id: $id) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContactQueryVariables,
  APITypes.GetContactQuery
>;
export const listContacts = /* GraphQL */ `query ListContacts(
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContactsQueryVariables,
  APITypes.ListContactsQuery
>;
