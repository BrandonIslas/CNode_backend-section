module.exports = function (req, res, next) {
  const queryStrings = req.query;
  for (const key in queryStrings) {
    const length = queryStrings[key].length;
    const isvalid = length > 20 ? false : isNaN(parseInt(queryStrings[key]));

    if(isvalid){
        queryStrings[key] = parseInt(queryStrings[key]);
    }
  }
  req.query= queryStrings;
  next();
};
