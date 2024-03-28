/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogEntryInput = {
  id?: string | null,
  month: string,
  year: string,
  data?: string | null,
};

export type ModelBlogEntryConditionInput = {
  month?: ModelStringInput | null,
  year?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelBlogEntryConditionInput | null > | null,
  or?: Array< ModelBlogEntryConditionInput | null > | null,
  not?: ModelBlogEntryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type BlogEntry = {
  __typename: "BlogEntry",
  id: string,
  month: string,
  year: string,
  data?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBlogEntryInput = {
  id: string,
  month?: string | null,
  year?: string | null,
  data?: string | null,
};

export type DeleteBlogEntryInput = {
  id: string,
};

export type CreateContactInput = {
  id?: string | null,
  name: string,
  email: string,
};

export type ModelContactConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelContactConditionInput | null > | null,
  or?: Array< ModelContactConditionInput | null > | null,
  not?: ModelContactConditionInput | null,
};

export type Contact = {
  __typename: "Contact",
  id: string,
  name: string,
  email: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContactInput = {
  id: string,
  name?: string | null,
  email?: string | null,
};

export type DeleteContactInput = {
  id: string,
};

export type ModelBlogEntryFilterInput = {
  id?: ModelIDInput | null,
  month?: ModelStringInput | null,
  year?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelBlogEntryFilterInput | null > | null,
  or?: Array< ModelBlogEntryFilterInput | null > | null,
  not?: ModelBlogEntryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBlogEntryConnection = {
  __typename: "ModelBlogEntryConnection",
  items:  Array<BlogEntry | null >,
  nextToken?: string | null,
};

export type ModelContactFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelContactFilterInput | null > | null,
  or?: Array< ModelContactFilterInput | null > | null,
  not?: ModelContactFilterInput | null,
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection",
  items:  Array<Contact | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionBlogEntryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  month?: ModelSubscriptionStringInput | null,
  year?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlogEntryFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogEntryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionContactFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContactFilterInput | null > | null,
  or?: Array< ModelSubscriptionContactFilterInput | null > | null,
};

export type CreateBlogEntryMutationVariables = {
  input: CreateBlogEntryInput,
  condition?: ModelBlogEntryConditionInput | null,
};

export type CreateBlogEntryMutation = {
  createBlogEntry?:  {
    __typename: "BlogEntry",
    id: string,
    month: string,
    year: string,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogEntryMutationVariables = {
  input: UpdateBlogEntryInput,
  condition?: ModelBlogEntryConditionInput | null,
};

export type UpdateBlogEntryMutation = {
  updateBlogEntry?:  {
    __typename: "BlogEntry",
    id: string,
    month: string,
    year: string,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogEntryMutationVariables = {
  input: DeleteBlogEntryInput,
  condition?: ModelBlogEntryConditionInput | null,
};

export type DeleteBlogEntryMutation = {
  deleteBlogEntry?:  {
    __typename: "BlogEntry",
    id: string,
    month: string,
    year: string,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContactMutationVariables = {
  input: CreateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type CreateContactMutation = {
  createContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContactMutationVariables = {
  input: UpdateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type UpdateContactMutation = {
  updateContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContactMutationVariables = {
  input: DeleteContactInput,
  condition?: ModelContactConditionInput | null,
};

export type DeleteContactMutation = {
  deleteContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBlogEntryQueryVariables = {
  id: string,
};

export type GetBlogEntryQuery = {
  getBlogEntry?:  {
    __typename: "BlogEntry",
    id: string,
    month: string,
    year: string,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogEntriesQueryVariables = {
  filter?: ModelBlogEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogEntriesQuery = {
  listBlogEntries?:  {
    __typename: "ModelBlogEntryConnection",
    items:  Array< {
      __typename: "BlogEntry",
      id: string,
      month: string,
      year: string,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContactQueryVariables = {
  id: string,
};

export type GetContactQuery = {
  getContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContactsQueryVariables = {
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactsQuery = {
  listContacts?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBlogEntrySubscriptionVariables = {
  filter?: ModelSubscriptionBlogEntryFilterInput | null,
};

export type OnCreateBlogEntrySubscription = {
  onCreateBlogEntry?:  {
    __typename: "BlogEntry",
    id: string,
    month: string,
    year: string,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogEntrySubscriptionVariables = {
  filter?: ModelSubscriptionBlogEntryFilterInput | null,
};

export type OnUpdateBlogEntrySubscription = {
  onUpdateBlogEntry?:  {
    __typename: "BlogEntry",
    id: string,
    month: string,
    year: string,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogEntrySubscriptionVariables = {
  filter?: ModelSubscriptionBlogEntryFilterInput | null,
};

export type OnDeleteBlogEntrySubscription = {
  onDeleteBlogEntry?:  {
    __typename: "BlogEntry",
    id: string,
    month: string,
    year: string,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
};

export type OnCreateContactSubscription = {
  onCreateContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
};

export type OnUpdateContactSubscription = {
  onUpdateContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
};

export type OnDeleteContactSubscription = {
  onDeleteContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
