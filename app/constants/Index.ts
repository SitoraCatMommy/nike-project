import { 
    bigShoe1,
    bigShoe2,
    bigShoe3,
    thumbnailShoe1,
    thumbnailShoe2,
    thumbnailShoe3
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

export type { navLinksProps, statProps, shoesProps };