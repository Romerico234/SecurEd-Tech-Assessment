export interface Password {
	encryptPassword(password: string): unknown;
	id: string;
	username: string;
	website: string;
	password: string;
}

export interface GetPasswordsQuery {
	username?: string;
	website?: string;
	id?: string;
}

