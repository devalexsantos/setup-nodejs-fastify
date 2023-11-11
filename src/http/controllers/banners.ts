import { prisma } from '../../lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getBanners() {
    const banners = await prisma.banners.findMany()
  
    return banners
  }