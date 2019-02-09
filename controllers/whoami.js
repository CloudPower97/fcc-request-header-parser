exports.getWhoAmI = (req, res) => {
  const { ip: ipaddress } = req;

  res.json({
    ipaddress,
    language: req.get('Accept-Language'),
    software: req.get('User-Agent')
  });
};
