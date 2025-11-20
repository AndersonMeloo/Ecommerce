import type { Prisma } from "../generated/prisma/client"
import { prisma } from "../utils/prisma"
import { getPublicURL } from "../utils/url"

export const findUserByEmail = async (email: string) => {

    const user = await prisma.user.findFirst({
        where: { email }
    })

    if (user) {

        return {
            ...user,
            avatar: user.avatar ? getPublicURL(user.avatar) : null,
            cover: user.cover ? getPublicURL(user.cover) : null
        }
    }

    return null
}

export const findUserBySlug = async (slug: string) => {

    const user = await prisma.user.findFirst({

        select: {
            avatar: true,
            cover: true,
            slug: true,
            name: true,
            bio: true,
            link: true
        },

        where: { slug }
    })

    if (user) {

        return {

            ...user,
            avatar: user.avatar ? getPublicURL(user.avatar) : null,
            cover: user.cover ? getPublicURL(user.cover) : null
        }
    }

    return null
}

export const createUser = async (data: Prisma.UserCreateInput) => {

    const newUser = await prisma.user.create({ data })

    return {
        
        ...newUser,
        avatar: newUser.avatar ? getPublicURL(newUser.avatar) : null,
        cover: newUser.cover ? getPublicURL(newUser.cover) : null
    }
}