declare global {
  namespace Express {
    interface Request {
      user: object;
      userDecode: {
        id?: string;
        sub?: string;
        name: string;
      };
    }
  }
}

export {};
