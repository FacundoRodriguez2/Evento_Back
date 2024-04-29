import User from '../User.js'
import 'dotenv/config.js'
import '../../config/database.js'

const user = [
    {
      name: 'Ana',
      lastname: 'González',
      photo: 'https://example.com/ana.jpg',
      email: 'ana@example.com',
      password: 'contraseña123',
      age: 30,
      genre: 'Femenino',
      events: ['61234abcd123456789abcdef'],
      role: 'user'
    },
    {
      name: 'Carlos',
      lastname: 'Martínez',
      email: 'carlos@example.com',
      password: '123456',
      age: 22,
      events: ['61234abcd123456789abcde1', '61234abcd123456789abcde4'],
      role: 'user'
    },
    {
      name: 'Laura',
      lastname: 'Sánchez',
      photo: 'https://example.com/laura.jpg',
      email: 'laura@example.com',
      password: 'clave123',
      age: 28,
      events: ['61234abcd123456789abcde2'],
      role: 'user'
    },
    {
      name: 'David',
      lastname: 'López',
      email: 'david@example.com',
      password: 'david1234',
      age: 35,
      events: ['61234abcd123456789abcde3'],
      role: 'organizer'
    },
    {
      name: 'Sara',
      lastname: 'Fernández',
      email: 'sara@example.com',
      password: 'password123',
      age: 26,
      events: ['61234abcd123456789abcde5'],
      role: 'user'
    }
  ];
User.insertMany(user)