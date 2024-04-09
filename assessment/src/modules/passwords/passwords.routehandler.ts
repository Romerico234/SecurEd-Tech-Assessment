import { NextFunction, Request, Response, Router } from "express";
import { PasswordManagerComponent } from "./passwords.component";
import { GetPasswordsQuery, Password } from "../../shared/types";

export class PasswordsRoutehandler {
	public static build(): Router {
		const router = Router();

		router.get("/", this.getPasswords);
		router.post("/", this.createPassword);
		router.patch("/:id", this.updatePassword);
		router.delete("/:id", this.deletePassword);

		return router;
	}

	private static getPasswords(req: Request, res: Response, next: NextFunction) {
		try {
			const query: GetPasswordsQuery = {
				website: req.query.website as string,
				id: req.query.id as string,
			};
			const passwords = PasswordManagerComponent.build().getPasswords(query);
			res.send(passwords);
		} catch (error) {
			next(error);
		}
	}

	private static createPassword(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const newPassword: Password = req.body;
			PasswordManagerComponent.build().createPassword(newPassword);
			res.status(201).json({ message: "Password created" });
		} catch (error) {
			next(error);
		}
	}

	private static updatePassword(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		console.log(req.params.id);
		try {
			PasswordManagerComponent.build().updatePassword(req.params.id, req.body);
			res.status(204).json({ message: "Password updated" });
		} catch (error) {
			next(error);
		}
	}

	private static deletePassword(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			PasswordManagerComponent.build().deletePassword(req.params.id);
			res.status(204).json({ message: "Password deleted" });
		} catch (error) {
			next(error);
		}
	}
}