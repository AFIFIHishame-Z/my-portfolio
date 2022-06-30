import prisma from "../lib/prisma";

async function main() {
  const user = await prisma?.user.upsert({
    where: { email: "hishame.afifi1997@gmail.com" },
    update: {},
    create: {
      firstName: "Hishame",
      lastName: "AFIFI",
      email: "hishame.afifi1997@gmail.com",
      upwork: "https://www.upwork.com/freelancers/~01eeebe85c73922cf0",
      address: "Fes, Morocco",
      facebook: "https://www.facebook.com/AFIFIHishame/",
      linkedIn: "www.linkedin.com/in/afifihishame",
      phone: "+212646251144",
    },
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma?.$disconnect();
  });
