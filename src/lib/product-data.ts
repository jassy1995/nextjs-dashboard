import { TColor } from "@/util/model";

export const specifications: string[] = ['t-shirts', 'shorts', 'shirts', 'hoodie', 'jeans'];

export const categories: string[] = ['casual', 'formal', 'party', 'gym'];

export const sizes = [
    { fullName: 'xx-small', shortName: 'xxs' },
    { fullName: 'x-small', shortName: 'xs' },
    { fullName: 'small', shortName: 'sm' },
    { fullName: 'medium', shortName: 'md' },
    { fullName: 'large', shortName: 'lg' },
    { fullName: 'x-large', shortName: 'xl' },
    { fullName: 'xx-large', shortName: 'xxl' },
    { fullName: '3x-large', shortName: '3xl' },
    { fullName: '4x-large', shortName: '4xl' }
  ];  

export const colors: TColor[] = [ 
    { name: 'green', value: 'bg-green-600'},
    { name: 'red', value: 'bg-red-600'},
    { name: 'yellow', value: 'bg-yellow-600'},
    { name: 'orange', value: 'bg-orange-600'},
    { name: 'blue', value: 'bg-blue-600'},
    { name: 'purple', value: 'bg-purple-600'},
    { name: 'pink', value: 'bg-pink-600'},
    { name: 'white', value: 'bg-white'},
    { name: 'black', value: 'bg-black'},
    { name: 'teal', value: 'bg-teal-600'},
    { name: 'indigo', value: 'bg-indigo-600'},
    { name: 'brown', value: 'bg-yellow-900'}
];
