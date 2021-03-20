/** Types generated for queries found in "src/queries/queries.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'FindAllGroups' parameters type */
export type IFindAllGroupsParams = void;

/** 'FindAllGroups' return type */
export interface IFindAllGroupsResult {
  id: string;
  name: string;
  description: string;
  image: string;
}

/** 'FindAllGroups' query type */
export interface IFindAllGroupsQuery {
  params: IFindAllGroupsParams;
  result: IFindAllGroupsResult;
}

const findAllGroupsIR: any = {"name":"FindAllGroups","params":[],"usedParamSet":{},"statement":{"body":"select id, name, description, image from groups","loc":{"a":26,"b":72,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * select id, name, description, image from groups
 * ```
 */
export const findAllGroups = new PreparedQuery<IFindAllGroupsParams,IFindAllGroupsResult>(findAllGroupsIR);


/** 'FindUsersInGroup' parameters type */
export interface IFindUsersInGroupParams {
  group_id: string | null | void;
}

/** 'FindUsersInGroup' return type */
export interface IFindUsersInGroupResult {
  id: string;
  name: string;
  email: string;
  bio: string;
  description: string;
  linkedin: string | null;
  twitter: string | null;
  github: string | null;
  role: string;
}

/** 'FindUsersInGroup' query type */
export interface IFindUsersInGroupQuery {
  params: IFindUsersInGroupParams;
  result: IFindUsersInGroupResult;
}

const findUsersInGroupIR: any = {"name":"FindUsersInGroup","params":[{"name":"group_id","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":359,"b":366,"line":18,"col":31}]}}],"usedParamSet":{"group_id":true},"statement":{"body":"select\n  users.id,\n  users.name,\n  users.email,\n  users.bio,\n  users.description,\n  users.linkedin,\n  users.twitter,\n  users.github,\n  users_groups.role\n  from users\n  join users_groups\n  ON users_groups.user_id = users.id\n  where users_groups.group_id=:group_id","loc":{"a":105,"b":366,"line":5,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * select
 *   users.id,
 *   users.name,
 *   users.email,
 *   users.bio,
 *   users.description,
 *   users.linkedin,
 *   users.twitter,
 *   users.github,
 *   users_groups.role
 *   from users
 *   join users_groups
 *   ON users_groups.user_id = users.id
 *   where users_groups.group_id=:group_id
 * ```
 */
export const findUsersInGroup = new PreparedQuery<IFindUsersInGroupParams,IFindUsersInGroupResult>(findUsersInGroupIR);


