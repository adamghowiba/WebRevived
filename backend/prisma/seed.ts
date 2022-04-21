import { Account, Contact, Prisma, PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateAccount {
	accountId: number;
	contacts: { id: number }[];
}

const CONTACT_DATA: Prisma.ContactCreateInput[] = [
	{
		first_name: 'Adam',
		last_name: 'Ghowiba',
		phone: '4079246902',
		title: 'Owner',
		email: 'adam@webrevived.com'
	},
	{ first_name: 'Adam', last_name: 'Ware', phone: '4072126464', title: 'Manager', email: 'adamware99@hotmail.com' }
];

const USER_DATA: Prisma.UserCreateInput[] = [
	{
		email: 'adam@webrevived.com',
		first_name: 'Adam',
		last_name: 'Ghowiba',
		password: 'password',
		bio: 'Just a happy owner',
		title: 'Owner',
		role: 'ADMIN',
		slack_uid: 'U01T9624Y2D',
		clickup_uid: '12859267'
	},
	{
		email: 'nathan@webrevived.com',
		first_name: 'Nathan',
		last_name: 'Euwin',
		password: 'lobbies',
		bio: 'The best stubborn developer',
		title: 'Head Developer',
		role: 'DEVELOPER'
	},
	{
		email: 'nathan@webrevived.com',
		first_name: 'Zsolt',
		last_name: 'Zelinskey',
		password: 'design',
		bio: 'Creative graphics designer',
		title: 'Designer',
		role: 'DESIGNER'
	}
];

const createUsers = async () => {
	const users = await prisma.user.createMany({
		data: USER_DATA
	});
};

const createAccountAndContacts = async (): Promise<CreateAccount> => {
	const account = await prisma.account.create({
		data: {
			name: 'Web Revived',
			city: 'Longwood',
			country: 'USA',
			industry: 'Technology',
			state: 'Florida',
			street: '1020 Waverly',
			phone: '407-924-9602',
			code: '32714',
			contacts: {
				create: CONTACT_DATA
			}
		},
		include: { contacts: true }
	});

	return { accountId: account.id, contacts: account.contacts.reduce((acc, { id }) => (acc = [...acc, { id }]), []) };
};

const createWebsiteAndForm = async (accountId: number, contactIds: { id: number }[]) => {
	const website = await prisma.website.create({
		data: {
			url: 'www.webrevived.com',
			account: {
				connect: { id: accountId }
			},
			forms: {
				create: {
					name: 'Contact Form',
					contacts: { connect: contactIds }
				}
			}
		}
	});

	return website;
};

async function main() {
	const { accountId, contacts } = await createAccountAndContacts();
	await createWebsiteAndForm(accountId, contacts);
	await createUsers();
}

main()
	.then(() => {
		console.log('Sucessfully seeded database.');
	})
	.catch(error => {
		console.error(error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
