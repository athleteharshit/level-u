export type CheckReportReasone<Y, X, Z> = (r: Y) => X | Z;
export type SingleGenerics<T> = (arg: T) => T;

export type JwtDecodeT = {
  exp: number;
  iat: number;
  userId: string;
  userRoleId: string;
};
