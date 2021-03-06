import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  users: Array<UserGroup>;
};

export type UserGroup = {
  __typename?: 'UserGroup';
  role: Scalars['String'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  bio: Scalars['String'];
  description: Scalars['String'];
  linkedin?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  groups: Array<Group>;
  hello: Scalars['String'];
};

export type GroupPreviewFragment = (
  { __typename?: 'Group' }
  & Pick<Group, 'id' | 'description' | 'name' | 'image'>
);

export type GetGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGroupsQuery = (
  { __typename?: 'Query' }
  & { groups: Array<(
    { __typename?: 'Group' }
    & GroupPreviewFragment
  )> }
);

export const GroupPreviewFragmentDoc: DocumentNode<GroupPreviewFragment, unknown> = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GroupPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Group"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]};
export const GetGroupsDocument: DocumentNode<GetGroupsQuery, GetGroupsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GroupPreview"}}]}}]}},...GroupPreviewFragmentDoc.definitions]};