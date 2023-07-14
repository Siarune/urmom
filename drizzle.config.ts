import type { Config } from "drizzle-kit";

export default {
	schema: "./src/lib/db/index",
	out: "./drizzle",
} satisfies Config;
