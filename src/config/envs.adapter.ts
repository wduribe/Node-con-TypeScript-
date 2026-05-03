import 'dotenv/config';
import env from 'env-var';

const { get } = env;

export const envsAdapter = {
    PORT: get('PORT').required().asPortNumber(),
    FRONTED_URL_DEV: get('FRONTED_URL_DEV').required().asUrlString(),
}