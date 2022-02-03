import Prisma from "@prisma/client";

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

console.log("prisma hello");

prisma.samurai.findMany({}).then((v) => console.log(v));
