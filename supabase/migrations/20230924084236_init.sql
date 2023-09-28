create extension if not exists "uuid-ossp";

create table cabins (
  id uuid primary key default uuid_generate_v4(),
  name varchar(20) not null,
  short_description varchar(100) not null,
  description text not null,
  created_at timestamptz not null default current_timestamp,
  updated_at timestamptz not null default current_timestamp
);

create table cabin_reservations (
  id uuid primary key default uuid_generate_v4(),
  cabin_id uuid not null references cabins(id),
  dates daterange not null,
  created_at timestamptz not null default current_timestamp,
  updated_at timestamptz not null default current_timestamp,
  foreign key (cabin_id) references cabins(id),
  exclude using gist (dates with &&)
);

