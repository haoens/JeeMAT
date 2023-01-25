import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





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