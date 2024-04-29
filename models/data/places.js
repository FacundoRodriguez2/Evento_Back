import Place from '../Place.js'
import 'dotenv/config.js'
import '../../config/database.js'


const placeExamples = [
    {
      name: 'Parque Central',
      address: 'Calle 123, Ciudad Principal',
      photo: 'https://example.com/park.jpg',
      events: ['61234abcd123456789abcde1', '61234abcd123456789abcde2'],
      occupancy: 500
    },
    {
      name: 'Centro Cultural',
      address: 'Avenida Principal, Ciudad Principal',
      photo: 'https://example.com/cultural-center.jpg',
      events: ['61234abcd123456789abcde3', '61234abcd123456789abcde4'],
      occupancy: 200
    },
    {
      name: 'Playa del Sol',
      address: 'Calle Playa, Ciudad Costera',
      photo: 'https://example.com/beach.jpg',
      events: ['61234abcd123456789abcde5'],
      occupancy: 1000
    },
    {
      name: 'Teatro Municipal',
      address: 'Calle Teatro, Ciudad Principal',
      events: ['61234abcd123456789abcde6'],
      occupancy: 300
    },
    {
      name: 'Estadio Deportivo',
      address: 'Avenida Deporte, Ciudad Principal',
      photo: 'https://example.com/stadium.jpg',
      events: ['61234abcd123456789abcde7'],
      occupancy: 10000
    }
  ];
  Place.insertMany(placeExamples)