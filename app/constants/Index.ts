import { 
    bigShoe1,
    bigShoe2,
    bigShoe3,
    thumbnailShoe1,
    thumbnailShoe2,
    thumbnailShoe3,
    shoe4,
    shoe5,
    shoe6,
    shoe7
} from '@/public/assets/images';



interface navLinksProps {
    href: string;
    label: string;
}

interface statProps {
    value: string;
    label: string;
}

interface shoesProps {
    small: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    big: any;
}

interface popularProductProps {
    imgURL: string,
        name: string,
        price: string,
}

export const navLinks: navLinksProps[] = [
    {href: "#home", label: "Home"},
    {href: "#about-us", label: "About us"},
    {href: "#products", label: "Products"},
    {href: "#contact-us", label: "Contact us"}
];

export const stat: statProps[] = [
    {value: "1k+", label: "Brands"},
    {value: "100+", label: "Stores"},
    {value: "500k+", label: "Customers"},
];

export const shoes: shoesProps[] = [
    {small: thumbnailShoe1, big: bigShoe1},
    {small: thumbnailShoe2, big: bigShoe2},
    {small: thumbnailShoe3, big: bigShoe3},
];

export const popularProducts: popularProductProps[] = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export type { navLinksProps, statProps, shoesProps, popularProductProps };