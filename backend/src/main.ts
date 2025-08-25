import 'reflect-metadata'
import express from 'express'
import { InversifyExpressServer } from 'inversify-express-utils'
import { Container } from 'inversify'
import './controllers/hello.controller'

// IoC Container
const container = new Container()

// Create server
const server = new InversifyExpressServer(container)

server.setConfig((app) => {
  app.use(express.json())
})

const app = server.build()
app.listen(3000, () => {
  console.log('🚀 Backend rodando em http://localhost:3000')
})
