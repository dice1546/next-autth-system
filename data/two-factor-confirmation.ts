import { db } from "@/lib/db";

export const getTwoFactorConfirmationByUserId = async (
    userId: string
) => {
    try {
        const twoFactroCinfirmation = await db.twoFactorConfirmation.findUnique({
            where: {userId}
        });
        return twoFactroCinfirmation;
    } catch (error) {
        return null;
    }
}