import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
    const session = await getSession();

    if (session !== null) {
        throw redirect(303, '/dashboard');
    }
}
