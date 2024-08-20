
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: {
      code: 'internal_server_error',
      message: 'An unexpected error occurred',
      status: 500
    }
  });
};

module.exports = errorHandler;
