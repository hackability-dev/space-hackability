require('dotenv').config();

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
  dbUrl: process.env.DATABASE_URL,
};
