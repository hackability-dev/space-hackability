import { Client } from 'pg';
import { findAllGroups, IFindAllGroupsResult, findUsersInGroup, IFindUsersInGroupResult } from './queries.queries';

export class DBService {
  private db: Client;

  constructor(databaseUrl: string) {
    this.db = new Client({
      connectionString: databaseUrl,
    });
  }

  async init() {
    await this.db.connect();
  }

  findAllGroups(): Promise<IFindAllGroupsResult[]> {
    return findAllGroups.run(undefined, this.db);
  }

  findUsersInGroup(groupId: string): Promise<IFindUsersInGroupResult[]> {
    return findUsersInGroup.run(
      {
        group_id: groupId,
      },
      this.db
    );
  }
}

let dbService: DBService;

export async function getDbService() {
  if (!dbService) {
    dbService = new DBService(process.env.DATABASE_URL);
    await dbService.init();
  }
  return dbService;
}
