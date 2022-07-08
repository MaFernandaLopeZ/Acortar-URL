import {PrismaCliente} from '@prisma/client';

export default function Home() {
    return <div>ShortID Redirect</div>;
}

export async function getServerSideProps({params}) {
    const prisma = new PrismaClient();
    const {shortId} = params;
    const data = await prisma.link.findUnique({
        where: {shortURL: shortId}
    });
    if(!data){
        return { redirect: {destination: "/"}}
    }

    return { 
        redirect: {destination: data.url}
    }
}