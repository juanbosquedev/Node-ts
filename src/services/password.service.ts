import bcrypt from 'bcrypt';

const JUMP_ROUND:number = 10;

export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, JUMP_ROUND)
}