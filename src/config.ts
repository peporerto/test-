import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    uri: process.env.URI_DATABASE,
    apiKey: process.env.JWT_SECRET,
  };
});
