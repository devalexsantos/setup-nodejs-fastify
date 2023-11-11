import { prisma } from '../../lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getBanners() {
    const banners = await prisma.banners.findMany()
  
    return banners
}

export async function getBanner(request: FastifyRequest, reply: FastifyReply) {
  const paramSchema = z.object({
    id: z.string()
  })

  const { id } = paramSchema.parse(request.params)

  const banner = await prisma.banners.findMany({
    where: {
      id
    }
  })

  return banner
}

export async function createBanner(request: FastifyRequest, reply: FastifyReply){
  const bodySchema = z.object({
    description: z.string(),
    url: z.string(),
  })

  const {description, url} = bodySchema.parse(request.body)
  
  await prisma.banners.create({
    data: {
      description,
      url
    }
  })

  return reply.status(201).send()
}

export async function updateBanner(request: FastifyRequest, reply: FastifyReply){
  const bodySchema = z.object({
    description: z.string().optional(),
    url: z.string()
  })

  const paramSchema = z.object({ id: z.string() })

  const {description, url} = bodySchema.parse(request.body)
  const { id } = paramSchema.parse(request.params)

  await prisma.banners.update({
    where: {
      id: id
    },
    data: {
      description,
      url
    }
  })

  return reply.status(204).send('Banner Updated!')
}

export async function deleteBanner(request: FastifyRequest, reply: FastifyReply) {
  const paramSchema = z.object({
    id: z.string()
  })

  const { id } = paramSchema.parse(request.params)

  await prisma.banners.delete({
    where: {
      id
    }
  })

  return reply.status(204).send()
}