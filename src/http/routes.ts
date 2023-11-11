import { FastifyInstance } from 'fastify'
import { createBanner, deleteBanner, getBanner, getBanners, updateBanner } from './controllers/banners'

export async function appRoutes(app: FastifyInstance) {
    app.get('/banners', getBanners)
    app.get('/banners/:id', getBanner)

    app.post('/banners', createBanner)
    app.post('/banners/:id', updateBanner)

    app.delete('/banners/delete/:id', deleteBanner)
  }