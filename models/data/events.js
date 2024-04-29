import Event from '../Event.js'
import 'dotenv/config.js'
import '../../config/database.js'

const eventExamples = [
    {
      place: '61234abcd123456789abcdef',
      date: new Date('2024-05-10'),
      name: 'Concierto en el parque',
      photo: 'https://example.com/concert.jpg',
      description: 'Disfruta de música en vivo en un ambiente al aire libre.',
      attendees: ['61234abcde123456789abcdef', '61234abcde123456789abcdf1'],
      minimumAge: 18,
      organizer: '61234abcde123456789abcdef'
    },
    {
      place: '61234abcd123456789abcdee1',
      date: new Date('2024-06-15'),
      name: 'Feria de comida',
      photo: 'https://example.com/food-fair.jpg',
      description: 'Prueba una variedad de platos deliciosos de diferentes cocinas del mundo.',
      attendees: ['61234abcde123456789abcdef', '61234abcde123456789abcdf1', '61234abcde123456789abcdf2'],
      minimumAge: 0,
      organizer: '61234abcde123456789abcdf1'
    },
    {
      place: '61234abcd123456789abcdee2',
      date: new Date('2024-07-20'),
      name: 'Taller de pintura',
      description: 'Aprende técnicas básicas de pintura con artistas locales.',
      attendees: ['61234abcde123456789abcdf1', '61234abcde123456789abcdf3'],
      minimumAge: 12,
      organizer: '61234abcde123456789abcdf2'
    },
    {
      place: '61234abcd123456789abcdee3',
      date: new Date('2024-08-05'),
      name: 'Clase de yoga al amanecer',
      description: 'Comienza tu día con una sesión relajante de yoga en la playa.',
      attendees: ['61234abcde123456789abcdef', '61234abcde123456789abcdf2'],
      minimumAge: 16,
      organizer: '61234abcde123456789abcdf3'
    },
    {
      place: '61234abcd123456789abcdee4',
      date: new Date('2024-09-12'),
      name: 'Exposición de arte contemporáneo',
      description: 'Descubre las obras más recientes de artistas locales emergentes.',
      attendees: ['61234abcde123456789abcdef', '61234abcde123456789abcdf1'],
      minimumAge: 0,
      organizer: '61234abcde123456789abcdf1'
    }
  ];

Event.insertMany(eventExamples)