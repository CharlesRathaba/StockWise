import bcrypt from "bcrypt";


export async function hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // You can adjust the salt rounds
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}


export async function comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
}
