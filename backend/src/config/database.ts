export const databaseConfig = {
    
  url: process.env.DATABASE_URL,

  validate() {
    if (!this.url) {
      throw new Error('DATABASE_URL Não está definido nas variáveis de ambiente');
    }
  }
};

