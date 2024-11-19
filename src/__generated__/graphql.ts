/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type BasicInfo = {
  __typename?: 'BasicInfo';
  age: Scalars['Int']['output'];
  bloodType?: Maybe<Scalars['String']['output']>;
  gender: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MedicalHistory = {
  __typename?: 'MedicalHistory';
  allergies: Array<Scalars['String']['output']>;
  chronicConditions: Array<Scalars['String']['output']>;
  currentMedications: Array<Scalars['String']['output']>;
};

export type Patient = {
  __typename?: 'Patient';
  basicInfo: BasicInfo;
  id: Scalars['ID']['output'];
  medicalHistory: MedicalHistory;
  recentVitals: RecentVitals;
};

export type Query = {
  __typename?: 'Query';
  allPatients: Array<Patient>;
  patient?: Maybe<Patient>;
};


export type QueryPatientArgs = {
  id: Scalars['ID']['input'];
};

export type RecentVitals = {
  __typename?: 'RecentVitals';
  bloodPressure: Scalars['String']['output'];
  heartRate: Scalars['Int']['output'];
  temperature: Scalars['Float']['output'];
};

export type GetPatientQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPatientQuery = { __typename?: 'Query', patient?: { __typename?: 'Patient', basicInfo: { __typename?: 'BasicInfo', name: string, age: number, gender: string, bloodType?: string | null }, medicalHistory: { __typename?: 'MedicalHistory', allergies: Array<string>, chronicConditions: Array<string>, currentMedications: Array<string> }, recentVitals: { __typename?: 'RecentVitals', bloodPressure: string, heartRate: number, temperature: number } } | null };

export type GetAllPatientsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPatientsQuery = { __typename?: 'Query', allPatients: Array<{ __typename?: 'Patient', id: string, basicInfo: { __typename?: 'BasicInfo', name: string, age: number, gender: string } }> };


export const GetPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"basicInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"bloodType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"medicalHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allergies"}},{"kind":"Field","name":{"kind":"Name","value":"chronicConditions"}},{"kind":"Field","name":{"kind":"Name","value":"currentMedications"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recentVitals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bloodPressure"}},{"kind":"Field","name":{"kind":"Name","value":"heartRate"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}}]}}]}}]}}]} as unknown as DocumentNode<GetPatientQuery, GetPatientQueryVariables>;
export const GetAllPatientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllPatients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPatients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"basicInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllPatientsQuery, GetAllPatientsQueryVariables>;