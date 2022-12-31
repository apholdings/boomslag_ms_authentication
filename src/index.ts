// src/index.ts

const pg = require('pg');
import { app } from "./app";

const start = async () => {
//   if (!process.env.JWT_KEY) {
//     throw new Error("JWT_KEY must be defined");
//   }
  if (!process.env.POSTGRES_URI) {
    throw new Error("POSTGRES_URI must be defined");
  }

  const pool = new pg.Pool({
    connectionString: process.env.POSTGRES_URI
  });

  pool.on('connect', () => {
    console.log("Connected to PostgreSQL");
  });

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();