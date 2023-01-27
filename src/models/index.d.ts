import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerClick = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Click, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id: string;
  readonly daily_budget: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClick = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Click, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id: string;
  readonly daily_budget: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Click = LazyLoading extends LazyLoadingDisabled ? EagerClick : LazyClick

export declare const Click: (new (init: ModelInit<Click>) => Click) & {
  copyOf(source: Click, mutator: (draft: MutableModel<Click>) => MutableModel<Click> | void): Click;
}

type EagerGoal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Goal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id: string;
  readonly type: string;
  readonly name: string;
  readonly amount: number;
  readonly days_to_save: number;
  readonly method: string;
  readonly frequency: string;
  readonly status: string;
  readonly savings_cumulated: number;
  readonly days_late: number;
  readonly savings_late: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGoal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Goal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id: string;
  readonly type: string;
  readonly name: string;
  readonly amount: number;
  readonly days_to_save: number;
  readonly method: string;
  readonly frequency: string;
  readonly status: string;
  readonly savings_cumulated: number;
  readonly days_late: number;
  readonly savings_late: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Goal = LazyLoading extends LazyLoadingDisabled ? EagerGoal : LazyGoal

export declare const Goal: (new (init: ModelInit<Goal>) => Goal) & {
  copyOf(source: Goal, mutator: (draft: MutableModel<Goal>) => MutableModel<Goal> | void): Goal;
}

type EagerBiometric = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Biometric, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly age?: number | null;
  readonly gender?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBiometric = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Biometric, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly age?: number | null;
  readonly gender?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Biometric = LazyLoading extends LazyLoadingDisabled ? EagerBiometric : LazyBiometric

export declare const Biometric: (new (init: ModelInit<Biometric>) => Biometric) & {
  copyOf(source: Biometric, mutator: (draft: MutableModel<Biometric>) => MutableModel<Biometric> | void): Biometric;
}