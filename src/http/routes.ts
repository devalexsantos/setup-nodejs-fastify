import { FastifyInstance } from 'fastify'
import { getBanners } from './controllers/banners'

export async function appRoutes(app: FastifyInstance) {
    app.get('/banners', getBanners)
  }