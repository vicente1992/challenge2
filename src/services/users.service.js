class UsersService {
  constructor({ UsersRepository }) {
    this.UsersRepository = UsersRepository;
  }
  async create(entity) {
    const { name, birthday, temperature } = entity;

    // Ask for conditions
    if (!name || !birthday || temperature < 36.5 || temperature > 37.5) {
      return { success: false, message: 'Pailas no puede entrar' }
    }

    // Calculate age
    const age = getAge(birthday);
    // Ask for new condition
    if (age < 18) {
      return { success: false, message: 'Pailas no puede entrar' }
    }

    // Add age to user

    try {
      // Create user
      const user = await this.UsersRepository.createOne(entity);
      return {
        success: true,
        message: 'Success!',
        data: user,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAllByStatus() {
    try {
      // Create mathching query "{ isPartyng: true }"
      const match = { isPartyng: true };
      const users = await this.UsersRepository.getAll(match);

      // Ask for condition    
      if (users.length === 0) {
        return { success: true, message: 'No hay nadie partyseando' }
      }
      // Return proper info
      return { success: true, message: 'Success!', data: users };

    } catch (error) {
      throw error;
    }
  }
}

// Helper functions

function getAge(dateString) {
  // Find into Internet: "How to get age from birthday JavaScript?"
  let hoy = new Date()
  let fechaNacimiento = new Date(dateString)
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
  if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--
  }
  return edad;

}

module.exports = UsersService;
