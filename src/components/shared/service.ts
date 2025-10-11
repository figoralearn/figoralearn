import { SocialItem } from './type';
import { LinkItem } from './type';



export const getSocials = (): SocialItem[] => {
  return [

  ];
};

export const getLinks = (): LinkItem[] => {
  return [

    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Programs',
      link: '/programs',
    },
    {
      title: 'Compete',
      link: '/compete',
    },
    {
      title: 'About',
      link: '/about',
    },
  ];
};
