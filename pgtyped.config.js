module.exports = {
  transforms: [
    {
      mode: 'sql',
      include: '**/*.sql',
      emitTemplate: '{{dir}}/{{name}}.queries.ts',
    },
  ],
  srcDir: './src/',
  failOnError: false,
  camelCaseColumnNames: false,
  db: {
    host: 'localhost',
    user: 'postgres',
    dbName: 'space_hackability_2',
    password: 'postgres',
  },
};
