import { RequestHandler } from "express";
import { signupSchema } from "../schemas/signup";
import { signinSchema } from "../schemas/signin";
import { createUser, findUserByEmail } from "../services/user";
import { hash, compare } from "bcrypt-ts";
import { createJWT } from "../utils/jwt";
import slug from "slug";

export const signup: RequestHandler = async (req, res) => {

    const safeData = signupSchema.safeParse(req.body) || {};
    if (!safeData.success) {
        return res.json({ error: safeData.error.flatten().fieldErrors });
    }

    const hasEmail = await findUserByEmail(safeData.data.email);
    if (hasEmail) {
        return res.json({ error: 'E-mail já existe' });
    }

    const hashedPassword = await hash(safeData.data.password, 10);

    const userSlug = slug(safeData.data.name + Date.now());

    const newUser = await createUser({

        slug: userSlug,       
        name: safeData.data.name,
        email: safeData.data.email,
        password: hashedPassword
    });

    const token = createJWT(newUser.email);

    res.status(201).json({
        token,
        user: {
            name: newUser.name,
            email: newUser.email
        }
    });
};

export const signin: RequestHandler = async (req, res) => {

    const safeData = signinSchema.safeParse(req.body);

    if (!safeData.success) {
        return res.json({ error: safeData.error.flatten().fieldErrors });
    }

    const user = await findUserByEmail(safeData.data.email);
    if (!user) return res.status(401).json({ error: 'Acesso negado' });

    const verifyPass = await compare(safeData.data.password, user.password);
    
    if (!verifyPass) return res.status(401).json({ error: 'Acesso negado' });

    const token = createJWT(user.email);

    res.json({
        token,
        user: {
            name: user.name,
            email: user.email
        }
    });
};
