export const appConfig = {
    
  port: parseInt(process.env.PORT || '5000'),
  baseURL: process.env.BASE_URL || 'http://localhost:5000',
  nodeEnv: process.env.NODE_ENV || 'development',
  
  jwtSecret: process.env.JWT_SECRET || "dakjnfapfka123sadjka",
  
  get isProduction() {
    return this.nodeEnv === 'production';
  },
  
  get isDevelopment() {
    return this.nodeEnv === 'development' || !process.env.NODE_ENV;
  },

  validate() {
    if (!this.jwtSecret) {
      throw new Error('JWT_SECRET Não está definido nas variáveis de ambiente');
    }
  }
};