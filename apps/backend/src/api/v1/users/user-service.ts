/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { DatabaseError } from '@errors/DatabaseError';
import prisma from '@common/db';
import { User } from '@prisma/client';

export const findUserById = async (userId: number) => {
	try {
		const user = await prisma.user.findUnique({
			where: { id: userId }
		});

		return user;
	} catch (error) {
		throw new DatabaseError(error);
	}
};

export const findByEmail = async (email: string) => {
	try {
		const user = await prisma.user.findUnique({
			where: { email }
		});

		return user;
	} catch (error) {
		throw new DatabaseError(error);
	}
};

export const getAllUsers = async (limit = 30) => {
	try {
		const user = await prisma.user.findMany({ take: limit });

		return user;
	} catch (error) {
		throw new DatabaseError(error);
	}
};

export const createUser = async ({ email, first_name, last_name, password, role }: Omit<Partial<User>, 'id'>) => {
	try {
		const createdUser = await prisma.user.create({
			data: {
				email,
				password,
				first_name,
				last_name,
				role
			}
		});

		return createdUser;
	} catch (error: any) {
		throw new DatabaseError(error);
	}
};
