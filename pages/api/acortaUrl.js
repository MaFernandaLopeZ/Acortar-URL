// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const { url } = req.body;
  const shortURL = Math.random().toString(36).substring(2, 5);

  try{
    const data = await prisma.link.create({
      data: { url, shortURL }
    });
    return res.status(200).send({data});
  }
  catch(error){
    return res.status(500).send({error});
  }
};

//prisma es un orm
//prisma es una libreria que nos permite crear nuestras propias bases de datos

