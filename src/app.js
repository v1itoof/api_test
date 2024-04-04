/* eslint-disable import/no-extraneous-dependencies */
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import pessoaRoutes from './routes/pessoaRoutes';
import enderecoRoutes from './routes/enderecoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', pessoaRoutes);
    this.app.use('/enderecos/', enderecoRoutes);
  }
}

export default new App().app;
