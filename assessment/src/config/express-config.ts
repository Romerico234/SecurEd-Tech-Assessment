import express from "express";
import cors from "cors";
import { PasswordsRoutehandler } from "../modules/passwords/passwords.routehandler";
import { ServiceError } from "../shared/error";

export class ExpressConfig {
    private static app = express();

    public static build() {
        this.app.use(express.json());
        this.app.use(cors({ origin: true, credentials: true }));
        this.app.set("trust proxy", true);
		
        this.initServerHome();

        // Register route handler for /passwords
        this.app.use("/passwords", PasswordsRoutehandler.build());
        
        this.app.use(this.handleError);

        return this.app;
    }
    
    private static initServerHome() {
        this.app.get("/", (req, res) => {
            res.send("Welcome to the server!");
        });
    }

    private static handleError(
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        console.log(err);
        if (err instanceof ServiceError) {
            res.status(err.statusCode).send(err.message);
        } else {
            res.status(500).send("Internal server error");
        }
    }
}
