export enum AuthStatus {
  Loading = 'LOADING',
  User = 'USER',
  Anonymous = 'ANONYMOUS',
}

export const HASURA_CLAIMS_KEY = 'https://hasura.io/jwt/claims';
// This should actually be an enum?
export enum HasuraClaimKey {
  AllowedRoles = 'x-hasura-allowed-roles',
  DefaultRole = 'x-hasura-default-role',
  UserID = 'x-hasura-user-id',
}

export interface HasuraClaims {
  [HasuraClaimKey.AllowedRoles]: string[];
  [HasuraClaimKey.DefaultRole]: string;
  [HasuraClaimKey.UserID]: string;
}


// export interface CustomClaims {
//   userId: string;
//   [HASURA_CLAIMS_KEY]: HasuraClaims;
// }

