import { SocialItem } from './type';
import { LinkItem } from './type';



export const getSocials = (): SocialItem[] => {
  return [
    {
      title: 'WVS UK',
      link: 'https://wvs.org.uk/',
    },
    {
      title: 'WVS India',
      link: 'https://wvs.org.uk/',
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/wvsgoa/?igsh=MWdnOThob29iYWhneA%3D%3D#',
    },
    {
      title: 'Facebook',
      link: 'https://www.facebook.com/wvshicksitc/?locale=en_GB',
    },
    {
      title: 'YouTube',
      link: 'https://www.youtube.com/watch?app=desktop&v=puXt9hiZs3w&fbclid=PAQ0xDSwLIqb9leHRuA2FlbQIxMQABp-aNsYxBEyIcRtLlc7X1UiSzcKIV155QdtuIXSC7ToTQzBLKMhyMqpl4FDI-_aem_nrgT0Cy3GvCQ7l-1EWbNNA',
    },
    {
      title: 'Cookies Policy',
      link: '/cookies-policy',
    },
  ];
};

export const getLinks = (): LinkItem[] => {
  return [
    // {
    //   title: 'About',
    //   link: '/about',
    //   sub: [
    //     {
    //       title: 'Hicks',
    //       link: 'hicks',
    //     },
    //     {
    //       title: 'Rabies',
    //       link: 'rabies',
    //     },
    //   ],
    // },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'Courses',
      link: '/courses',
    },
    {
      title: 'Compete',
      link: '/compete',
    },
  ];
};
