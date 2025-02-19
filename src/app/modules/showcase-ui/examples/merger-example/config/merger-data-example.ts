import { MergeObject } from '@lab900/ui';
import { MergerDataExample } from '../models/merger-data-example.model';

export const mergerDataExample: MergeObject<MergerDataExample>[] = [
  {
    data: {
      name: 'Axelle',
      firstName: 'Red',
      address: {
        country: 'Belgium',
        street: 'Examplestreet',
        number: 12,
        box: 'A',
      },
      languages: ['Nederlands', 'Frans'],
    },
    title: 'Axelle Red with a very long title that does not fit in the box ',
  },
  {
    data: {
      name: 'Axelle',
      firstName: 'Blue',
      address: {
        country: 'Netherlands',
        street: 'Examplestreet',
        number: 13,
        box: 'A',
      },
      languages: ['Frans', 'Nederlands'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nunc vel convallis malesuada. Suspendisse at tristique tortor, id elementum odio.',
      dateOfBirth: new Date(),
    },
    title: 'Axelle Blue',
  },
];
