/*eslint-disable */
import { DataSource } from 'typeorm';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'db.jmdncdumoxldmmrkzhii.supabase.co',
        port: 5432,
        username: 'postgres',
        password: 'contrasenaSENA123',
        database: 'photos',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
