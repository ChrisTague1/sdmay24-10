import type { Actions } from './$types';

export const actions = {
	default: async ({request}) => {
        const data = await request.formData();

        const file = data.get('cancerFile') as File;

        console.log(await file.text());
	},
} satisfies Actions;
