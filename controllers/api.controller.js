exports.getEndpoints = (req, res, next) => {
  getJsonInfo().then((description) => {
    res.status(200).send(description);
  })
  .catch(next);
}