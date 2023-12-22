import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();
const comment = await db.comment.create({
	data: {
		slug: 'stardew-valley',
		user: 'Bob',
		message: 'Test message 1'
	}
})
console.log(comment);

const comments = await db.comment .findMany({
	where: {slug: 'stardew-valley'},
});
console.log(comments);