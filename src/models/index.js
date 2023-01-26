// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Click, Goal, Biometric } = initSchema(schema);

export {
  Click,
  Goal,
  Biometric
};