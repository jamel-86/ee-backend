create table
  public.config (
    id uuid not null default uuid_generate_v4 (),
    type text not null,
    description text null,
    config_data jsonb not null,
    created_at timestamp with time zone null default now(),
    updated_at timestamp with time zone null default now(),
    room text null,
    connected_ga jsonb null,
    icon text null,
    series jsonb null,
    constraint config_pkey primary key (id)
  ) tablespace pg_default;


  create table
  public.knx_entities (
    id uuid not null default gen_random_uuid (),
    name text not null,
    type text not null,
    group_addresses jsonb not null,
    config_id uuid not null,
    icon text null,
    room text null,
    series jsonb null,
    constraint knx_entities_pkey primary key (id),
  ) tablespace pg_default;

  create table
  public.projects (
    id uuid not null default gen_random_uuid (),
    name text not null,
    description text null,
    created_at timestamp with time zone null default now(),
    updated_at timestamp with time zone null default now(),
    created_by uuid null,
    updated_by uuid null,
    timezone text not null,
    location text not null,
    image text null,
    constraint projects_pkey primary key (id)
  ) tablespace pg_default;

  create table
  public.buildings (
    id uuid not null default uuid_generate_v4 (),
    name text not null,
    image bytea null,
    description text null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now(),
    project_id uuid not null,
    constraint buildings_pkey primary key (id),
    constraint buildings_project_id_fkey foreign key (project_id) references projects (id) on delete cascade
  ) tablespace pg_default;

  create table
  public.floors (
    id uuid not null default uuid_generate_v4 (),
    name text not null,
    description text null,
    image text null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now(),
    building_id uuid not null,
    constraint floors_pkey primary key (id),
    constraint floors_building_id_fkey foreign key (building_id) references buildings (id)
  ) tablespace pg_default;

  create table
  public.rooms (
    id uuid not null default uuid_generate_v4 (),
    name text not null,
    description text null,
    created_at timestamp with time zone null default now(),
    updated_at timestamp with time zone null default now(),
    floor_id uuid not null,
    area integer null,
    zone integer null,
    image text null,
    constraint rooms_pkey primary key (id),
    constraint rooms_floor_id_fkey foreign key (floor_id) references floors (id) on delete cascade
  ) tablespace pg_default;