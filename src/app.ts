import { envsAdapter } from "./config/envs.adapter.ts";
import { AppRoutes } from "./presentation/routes.ts";
import { Server } from "./presentation/server.ts";


(() => {
    main();
})();


async function main() {

    const server = new Server({
        port: envsAdapter.PORT,
    });

    server.start();
    server.setRoutes(AppRoutes.routes);
}