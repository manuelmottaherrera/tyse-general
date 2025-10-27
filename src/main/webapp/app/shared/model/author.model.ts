export interface IAuthor {
  id?: number;
  name?: string;
  age?: number | null;
}

export const defaultValue: Readonly<IAuthor> = {};
