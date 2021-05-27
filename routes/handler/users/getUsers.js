const { User } = require("../../../models");

module.exports = async (req, res) => {
  const userIds = req.query.user_ids || [];
  const sqlOptoins = {
    attributes: ["id", "name", "email", "role", "avatar", "profession"],
  };

  if (userIds.length) {
    sqlOptoins.where = {
      id: userIds,
    };
  }
  const users = await User.findAll(sqlOptoins);

  return res.json({
    status: "success",
    data: users,
  });
};
