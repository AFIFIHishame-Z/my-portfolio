import { PrismaClient } from "@prisma/client";

declare module global {
  var prisma: PrismaClient;
}

let prisma: PrismaClient | undefined;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
}

export default prisma;
