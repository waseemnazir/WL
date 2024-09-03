import { appConfig } from './app.config';
import { authConfig } from './auth.config';
import { postgresConfig } from './postgres.config';
import { mongoConfig } from './mongo.config';

export const configs = [appConfig, authConfig, postgresConfig, mongoConfig];
