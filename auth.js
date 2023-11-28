// auth.js

exports.webAuth = (req, res, next) => {
    const { user } = req.body;
  
    if (user !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }
  
    next();
  };
  
  exports.apiAuth = (req, res, next) => {
    const { user } = req.body;
  
    if (user !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }
  
    next();
  };
  