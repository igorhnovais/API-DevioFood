import prisma from "../src/database/db";

async function main(){

    const products = await prisma.products.findMany();

    if(products.length === 0){
        await prisma.products.createMany({
            data:[
                {
                    "image": "https://img.freepik.com/fotos-gratis/hamburguer-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_90220-1329.jpg",
                    "name":"Hamburguer simples",
                    "price": 2250,
                    "code": 202002,
                },
                {
                    "image": "https://img.freepik.com/fotos-gratis/hamburguer-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_90220-1329.jpg",
                    "name":"Hamburguer medio",
                    "price": 2450,
                    "code": 202004,
                },
                {
                    "image": "https://img.freepik.com/fotos-gratis/hamburguer-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_90220-1329.jpg",
                    "name":"Hamburguer grande",
                    "price": 2650,
                    "code": 202006,
                },
                {
                    "image": "https://img.freepik.com/fotos-gratis/hamburguer-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_90220-1329.jpg",
                    "name":"Hamburguer gigante",
                    "price": 2850,
                    "code": 202008,
                },
        ]
    })
    }  
}

main()
    .then(() => {console.log("Successful registration!!")})
    .catch(e => {console.log(e); process.exit(1)})
    .finally(async() => {await prisma.$disconnect()})