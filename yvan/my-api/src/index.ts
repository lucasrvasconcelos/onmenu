import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';
import { AddressInfo } from 'net';

const fastify = Fastify({ logger: true });
const prisma = new PrismaClient();

fastify.register(cors, {
  origin: true,
});

fastify.get('/app/:company', async (request, reply) => {
  const { company } = request.params as { company: string };
  const companyData = await prisma.company.findUnique({
    where: { cnpj: company },
  });
  if (!companyData) {
    reply.status(404).send({ error: 'Company not found' });
  } else {
    reply.send(companyData);
  }
});

fastify.get('/app/:company/popular', async (request, reply) => {
  const { company } = request.params as { company: string };
  const companyData = await prisma.company.findUnique({
    where: { cnpj: company },
    include: {
      products: {
        where: { popular: true },
      },
    },
  });
  if (!companyData) {
    reply.status(404).send({ error: 'Company not found' });
  } else {
    reply.send(companyData.products);
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    const address = fastify.server.address();
    if (address && typeof address !== 'string') {
      const port = (address as AddressInfo).port;
      fastify.log.info(`Server listening on ${port}`);
    } else {
      fastify.log.info(`Server listening`);
    }
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
