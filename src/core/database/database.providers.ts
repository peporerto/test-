import * as mongoose from 'mongoose';
import config from 'src/config';
import { ConfigType } from '@nestjs/config';

const uri =
  'mongodb://peritopo:celulacho123@ac-twgcjnc-shard-00-00.nnbr7nv.mongodb.net:27017,ac-twgcjnc-shard-00-01.nnbr7nv.mongodb.net:27017,ac-twgcjnc-shard-00-02.nnbr7nv.mongodb.net:27017/?ssl=true&replicaSet=atlas-plntjq-shard-0&authSource=admin&retryWrites=true&w=majority';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (
      configService: ConfigType<typeof config>,
    ): Promise<typeof mongoose> => mongoose.connect(uri),
  },
];
