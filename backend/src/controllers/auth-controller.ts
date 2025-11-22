import { RequestHandler } from "express";
import { signupSchema } from "../schemas/signup";
import { signinSchema } from "../schemas/signin";
import { createUser, findUserByEmail } from "../services/user";
import { hash, compare } from "bcrypt-ts";
import { createJWT } from "../utils/jwt";

export const signup: RequestHandler = async (req, res) => {

    const safeData = signupSchema.safeParse(req.body);

    if (!safeData.success) {
        return res.json({ error: safeData.error.flatten().fieldErrors });
    }

    const hasEmail = await findUserByEmail(safeData.data.email);
    if (hasEmail) {
        return res.json({ error: 'E-mail já existe' });
    }

    const hashedPassword = await hash(safeData.data.password, 10);

    const newUser = await createUser({
        name: safeData.data.name,
        email: safeData.data.email,
        password: hashedPassword
    });

    const token = createJWT(newUser.id);

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

    if (!user.password) {
        return res.status(500).json({ error: "Erro: Usuário não possui Senha." });
    }

    const verifyPass = await compare(safeData.data.password, user.password);
    if (!verifyPass) return res.status(401).json({ error: 'Acesso negado' });

    const token = createJWT(user.id);

    res.json({
        token,
        user: {
            name: user.name,
            email: user.email
        }
    });
};
