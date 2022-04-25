module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '73dd491f6d4764413e33fcfcd3576ca1'),
  },
});
