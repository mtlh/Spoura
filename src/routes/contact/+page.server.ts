import type { PageServerLoad } from '../$types';

/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load = (async () => {
    const all = await prisma.product.findMany({});
    if (all) {
        return {
            all: JSON.stringify(all),
            base_url: process.env.BASE_URL,
        };
    } else {
        return {
            "error": true
        }
    }
}) satisfies PageServerLoad;