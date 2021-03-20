-- migrate:up
CREATE TABLE groups (
    id VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL DEFAULT '',
    image VARCHAR NOT NULL
);

CREATE TABLE users (
    id VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    bio VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    linkedin VARCHAR,
    twitter VARCHAR,
    github VARCHAR
);

CREATE TABLE users_groups (
    id SERIAL PRIMARY KEY NOT NULL,
    role VARCHAR NOT NULL,
    user_id VARCHAR NOT NULL,
    group_id VARCHAR NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TYPE project_status AS ENUM ('draft', 'published', 'under_revision');

CREATE TABLE projects (
    id VARCHAR PRIMARY KEY NOT NULL,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    tags VARCHAR[],
    body VARCHAR NOT NULL,
    images VARCHAR[],
    status project_status NOT NULL DEFAULT E'draft',
    license VARCHAR NOT NULL DEFAULT E'cc-ns-by-sa',
    group_id VARCHAR NOT NULL
);

-- CreateTable
CREATE TABLE users_projects (
    id SERIAL PRIMARY KEY NOT NULL,
    contribution VARCHAR NOT NULL,
    user_id VARCHAR NOT NULL,
    project_id VARCHAR NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE ON UPDATE CASCADE
);


-- migrate:down
DROP TABLE users_groups;
DROP TABLE users_projects;
DROP TABLE groups;
DROP TABLE users;
DROP TABLE projects;
DROP TYPE project_status;