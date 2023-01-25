// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Biometric } = initSchema(schema);

export {
  Biometric
};