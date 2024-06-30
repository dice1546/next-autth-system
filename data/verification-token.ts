import { db } from "@/lib/db";


export const getVerificationTokenByToken = async (
    token: string
    ) => {
    try {
        const vertificaitonToken = await db.verificationToken.findUnique({
            where: {
                token
            }
        });
        return vertificaitonToken;
    } catch (error) {
        return null;
    }
}

export const getVerificationTokenByEmail = async (
    email: string
    ) => {
    try {
        const vertificaitonToken = await db.verificationToken.findFirst({
            where: {
                email
            }
        });
        return vertificaitonToken;
    } catch (error) {
        return null;
    }
}