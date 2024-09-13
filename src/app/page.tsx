
import { env } from "@/lib/env";



export default async function Home() {
    const { APP_NAME } = env;


    return (
        <main>
            {APP_NAME}

        </main>
    );
}
