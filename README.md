# Seer backend

This is a small Fastify service to create games which will be used by the frontend to see if there are any games for a user when they connect their wallets.

Typically these endpoints would require user authentication to work however these are all publicly accessible for the purpose of the test.

## Getting started
Start the development server:
```bash
yarn dev
```

## Improvements
- require user auth for endpoints
- add index on player_one in games table & use player_one in WHERE condition in sql to improve finishGame function 