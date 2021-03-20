/* @name FindAllGroups */
select id, name, description, image from groups;

/* @name FindUsersInGroup */
select
  users.id,
  users.name,
  users.email,
  users.bio,
  users.description,
  users.linkedin,
  users.twitter,
  users.github,
  users_groups.role
  from users
  join users_groups
  ON users_groups.user_id = users.id
  where users_groups.group_id=:group_id;