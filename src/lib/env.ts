import z from "zod";

const schema = z.object({

    APP_ENV: z.string().trim().min(1),
    APP_VERSION: z.string().trim().min(1),
    APP_NAME: z.string().trim().min(1),
    APP_BASE_URL: z.string().trim().min(1),

    NEXT_TELEMETRY_DISABLED: z.string().trim().default('1'),

});

export const env = schema.parse(process.env);
