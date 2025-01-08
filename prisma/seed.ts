import {prisma} from "@/prisma"
import { log } from "console"

export async function seed(){
    await prisma.user.createMany({
        data: [
            {
                name: "Rodrigo",
                email: "rodrigo@email.com"
            },

            {
                name: "Gisele",
                email: "gisele@email.com"
            },

            {
                name: "Liz",
                email: "liz@email.com"
            }
        ]
    })
}

seed().then(() => {
    console.log("Database seeded!")
    prisma.$disconnect()
})