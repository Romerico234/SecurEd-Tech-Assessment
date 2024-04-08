import { randomUUID } from "crypto";
import { EncryptService } from "../../config/encrypt";
import { Database } from "../../database/database";
import { IDatabase } from "../../database/idatabase";
import { ServiceError, ServiceErrorType } from "../../shared/error";
import { GetPasswordsQuery, Password } from "../../shared/types";

export class PasswordManagerComponent {
    public constructor(private database: IDatabase) {}
    public static build(): PasswordManagerComponent {
        const database = Database.getInstance();
        return new PasswordManagerComponent(database);
    }

    public getPasswords(query: GetPasswordsQuery): Password[] {
        const passwords = this.database.getPasswords(query);
		return passwords;
    }

    public createPassword(newPassword: Partial<Password>): string {
        // Validate the request body
        if (!newPassword.username) {
            throw new ServiceError(
                ServiceErrorType.BAD_REQUEST,
                "Username is required"
            );
        }

        if (!newPassword.password) {
            throw new ServiceError(
                ServiceErrorType.BAD_REQUEST,
                "Password is required"
            );
        }

        if (!newPassword.website) {
            throw new ServiceError(
                ServiceErrorType.BAD_REQUEST,
                "Website is required"
            );
        }

        // Encrypt the new password
        const encrypted = EncryptService.encryptPassword(newPassword.password);

        // Create id
        newPassword.id = randomUUID();
        // Save the new password
        this.database.createPassword({
            ...(newPassword as Password),
            password: encrypted,
        });

        console.log(encrypted);
        return newPassword.id;
    }

    public updatePassword(id: string, updates: Partial<Password>) {
        //Check if the password exists
        const password = this.database.getPassword(id);
        // Validate the existing password
        if (!password) {
            throw new ServiceError(
                ServiceErrorType.NOT_FOUND,
                "Password cannot be found"
            );
        }

        // Validate the updated password
        if (updates.id) {
            throw new ServiceError(
                ServiceErrorType.BAD_REQUEST,
                "ID cannot be updated"
            );
        }

        // Validate the request body
        if (!updates.username) {
            throw new ServiceError(
                ServiceErrorType.BAD_REQUEST,
                "Username is required"
            );
        }

        if (!updates.password) {
            throw new ServiceError(
                ServiceErrorType.BAD_REQUEST,
                "Password is required"
            );
        }

        if (!updates.website) {
            throw new ServiceError(
                ServiceErrorType.BAD_REQUEST,
                "Website is required"
            );
        }

        // Apply updates and encrypt the new password
        if (updates.password) {
            password.password = EncryptService.encryptPassword(
                updates.password
            );
        }

        if (updates.username) {
            password.username = updates.username;
        }
        if (updates.website) {
            password.website = updates.website;
        }

        // Save the updated password
        this.database.updatePassword(password);
    }

    public deletePassword(id: string) {
        //Check if the password exists
        const password = this.database.getPassword(id);
        // Validate the existing password
        if (!password) {
            throw new ServiceError(
                ServiceErrorType.NOT_FOUND,
                "Password cannot be found"
            );
        }
        // Delete the password
        this.database.deletePassword(id);
    }
}
