import electronics from '../assets/shops/electronics-shop.jpg'
import kids from '../assets/shops/kids-shop.jpg'
import oddish from '../assets/shops/oddish-shop.jpg'
import sardar from '../assets/shops/sardar-shop.jpg'
import sukhbir from '../assets/shops/sukhbir-shop.png'

const shops = [
    {
        id: 1,
        name: "Sardar Sweets",
        location: {
            area: "Halwai Atta",
            city: "Saharanpur"
        },
        rating: 5,
        category: "Food and Drinks",
        img: sardar
    },
    {
        id: 2,
        name: "Oddish Casuals",
        location: {
            area: "Tilak Market",
            city: "Saharanpur"
        },
        rating: 4,
        category: "Clothing & Acessories",
        img: oddish
    },
    {
        id: 3,
        name: "Galaxy Store",
        location: {
            area: "Delhi road",
            city: "Saharanpur"
        },
        rating: 5,
        category: "Electronics",
        img: electronics
    },
    {
        id: 4,
        name: "Sukhbir Samose",
        location: {
            area: "Rani Bazaar",
            city: "Saharanpur"
        },
        rating: 5,
        category: "Food and Drinks",
        img: sukhbir 
    },
    // {
    //     id: 5,
    //     name: "Kids Look",
    //     location: {
    //         area: "Court Road",
    //         city: "Saharanpur"
    //     },
    //     rating: 5,
    //     category: "Babies and Kids",
    //     img: "../images/shops/kids-shop.jpg" 
    // },
    // {
    //     id: 5,
    //     name: "Kids Look",
    //     location: {
    //         area: "Court Road",
    //         city: "Saharanpur"
    //     },
    //     rating: 5,
    //     category: "Babies and Kids",
    //     img: "../images/shops/kids-shop.jpg" 
    // }
];

export default shops;