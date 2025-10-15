const errorHandler = (err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).send({ msg: err.message });
  } else {
    return res.status(500).send({ msg: err.message });
  }
};

export default errorHandler;
