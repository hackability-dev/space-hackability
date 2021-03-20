SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: project_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.project_status AS ENUM (
    'draft',
    'published',
    'under_revision'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: groups; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.groups (
    id character varying NOT NULL,
    name character varying NOT NULL,
    description character varying DEFAULT ''::character varying NOT NULL,
    image character varying NOT NULL
);


--
-- Name: projects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.projects (
    id character varying NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    tags character varying[],
    body character varying NOT NULL,
    images character varying[],
    status public.project_status DEFAULT 'draft'::public.project_status NOT NULL,
    license character varying DEFAULT 'cc-ns-by-sa'::character varying NOT NULL,
    group_id character varying NOT NULL
);


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying(255) NOT NULL
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id character varying NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    bio character varying NOT NULL,
    description character varying NOT NULL,
    linkedin character varying,
    twitter character varying,
    github character varying
);


--
-- Name: users_groups; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users_groups (
    id integer NOT NULL,
    role character varying NOT NULL,
    user_id character varying NOT NULL,
    group_id character varying NOT NULL
);


--
-- Name: users_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_groups_id_seq OWNED BY public.users_groups.id;


--
-- Name: users_projects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users_projects (
    id integer NOT NULL,
    contribution character varying NOT NULL,
    user_id character varying NOT NULL,
    project_id character varying NOT NULL
);


--
-- Name: users_projects_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_projects_id_seq OWNED BY public.users_projects.id;


--
-- Name: users_groups id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_groups ALTER COLUMN id SET DEFAULT nextval('public.users_groups_id_seq'::regclass);


--
-- Name: users_projects id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_projects ALTER COLUMN id SET DEFAULT nextval('public.users_projects_id_seq'::regclass);


--
-- Name: groups groups_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_pkey PRIMARY KEY (id);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users_groups users_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_groups
    ADD CONSTRAINT users_groups_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_projects users_projects_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_projects
    ADD CONSTRAINT users_projects_pkey PRIMARY KEY (id);


--
-- Name: users_groups users_groups_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_groups
    ADD CONSTRAINT users_groups_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.groups(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users_groups users_groups_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_groups
    ADD CONSTRAINT users_groups_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users_projects users_projects_project_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_projects
    ADD CONSTRAINT users_projects_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users_projects users_projects_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_projects
    ADD CONSTRAINT users_projects_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--


--
-- Dbmate schema migrations
--

INSERT INTO public.schema_migrations (version) VALUES
    ('20210320141600');
