/*
  An entry is created when player 1 creates the contract.
  is_finished is set to true when player 1 solves the game or either players trigger timeout
*/
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS games (
  id uuid default uuid_generate_v4(),
  player_one varchar not null,
  player_two varchar,
  contract_address varchar not null default '', 
  is_finished boolean default false,

  primary key (id),
);