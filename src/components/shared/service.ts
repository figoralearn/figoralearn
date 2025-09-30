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
    // {
    //   title: 'About',
    //   link: '/about',
    // },
    {
      title: 'Programs',
      link: '/programs',
    },
    {
      title: 'Compete',
      link: '/compete',
    },
  ];
};
