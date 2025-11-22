import type { Prisma } from "../generated/prisma/client"
import { prisma } from "../utils/prisma"
import { getPublicURL } from "../utils/url"

// Buscar o Usuário pelo E-mail
export const findUserByEmail = async (email: string) => {

    return prisma.user.findFirst({
        where: { email }
    });
}

// Buscar o Usuário pelo ID
export const findUserById  = async (id: string) => {

    return prisma.user.findUnique({
        where: { id }
    });
}

export const createUser = async (data: Prisma.UserCreateInput) => {

    return prisma.user.create({ data })
}