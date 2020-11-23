const { UsersService } = require('../services');


class UsersController {
  async createOne(req, res) {
    // Take user data from req.body
    try {
      const response = await UsersService.create(req.body);
      // Return status and responses in each case
      if (response.success === false) {
        return res.status(400).send(response);
      }
      return res.status(201).send(response);

    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async getAll(req, res) {
    // Call the service
    try {
      const response = await UsersService.getAllByStatus();
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).send(error);
    }

    // Return a proper response
  }
}

module.exports = new UsersController();
