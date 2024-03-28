/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBlogEntry = /* GraphQL */ `subscription OnCreateBlogEntry($filter: ModelSubscriptionBlogEntryFilterInput) {
  onCreateBlogEntry(filter: $filter) {
    id
    month
    year
    data
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBlogEntrySubscriptionVariables,
  APITypes.OnCreateBlogEntrySubscription
>;
export const onUpdateBlogEntry = /* GraphQL */ `subscription OnUpdateBlogEntry($filter: ModelSubscriptionBlogEntryFilterInput) {
  onUpdateBlogEntry(filter: $filter) {
    id
    month
    year
    data
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBlogEntrySubscriptionVariables,
  APITypes.OnUpdateBlogEntrySubscription
>;
export const onDeleteBlogEntry = /* GraphQL */ `subscription OnDeleteBlogEntry($filter: ModelSubscriptionBlogEntryFilterInput) {
  onDeleteBlogEntry(filter: $filter) {
    id
    month
    year
    data
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBlogEntrySubscriptionVariables,
  APITypes.OnDeleteBlogEntrySubscription
>;
export const onCreateContact = /* GraphQL */ `subscription OnCreateContact($filter: ModelSubscriptionContactFilterInput) {
  onCreateContact(filter: $filter) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateContactSubscriptionVariables,
  APITypes.OnCreateContactSubscription
>;
export const onUpdateContact = /* GraphQL */ `subscription OnUpdateContact($filter: ModelSubscriptionContactFilterInput) {
  onUpdateContact(filter: $filter) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateContactSubscriptionVariables,
  APITypes.OnUpdateContactSubscription
>;
export const onDeleteContact = /* GraphQL */ `subscription OnDeleteContact($filter: ModelSubscriptionContactFilterInput) {
  onDeleteContact(filter: $filter) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteContactSubscriptionVariables,
  APITypes.OnDeleteContactSubscription
>;
