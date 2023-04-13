import { createStore, combineReducers } from "redux";


const CardsData = [

    {
        id: 1,
        name: "Dolce & Gabbana-Black-Sorrento-Sneakers",
        imgdata: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222003F128012_4/dolce-and-gabbana-black-sorrento-sneakers.jpg",
        Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
        somedata: " 1175 + order placed from here recently",
        price: 500,
        rating: "4.9",
        qnty: 0,
        size: 44
    }
    ,
    {
        id: 2,
        name: "Dolce & Gabbana-Pink-Portofino-Sneakers",
        imgdata: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222003F128019_1/dolce-and-gabbana-pink-portofino-sneakers.jpg",
        Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
        somedata: " 2525 + order placed from here recently",
        price: 25,
        rating: "3.9",
        qnty: 0,
        size: 44
    },
    {
        id: 3,
        name: "Dolce & Gabbana-white and Black-Airmaster-Sneakers",
        imgdata: "https://img.ssensemedia.com/images/f_auto,q_auto:best/221003F128024_1/dolce-and-gabbana-white-and-black-airmaster-sneakers.jpg",
        Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
        somedata: " 650 + order placed from here recently",
        price: 70,
        rating: "4.2",
        qnty: 0,
        size: 44
    },
    {
        id: 4,
        name: "Dolce & Gabbana-white and Black-Airmaster-Sneakers",
        imgdata: "https://img.ssensemedia.com/images/f_auto,q_auto:best/221003F128024_4/dolce-and-gabbana-white-and-black-airmaster-sneakers.jpg",
        Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
        somedata: " 300 + order placed from here recently",
        price: 70,
        rating: "3.8",
        qnty: 0,
        size: 44
    },
    {
        id: 5,
        name: "Dolce & Gabbana MOSCHINO-Black-Teddy-Sock-Sneakers",
        imgdata: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222720F127002_4/moschino-black-teddy-sock-sneakers.jpg",
        Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
        somedata: "1050 + order placed from here recently",
        price: 210,
        rating: "4.0",
        qnty: 0,
        size: 44
    },
    {
        id: 6,
        name: "Dolce & Gabbana Pink-Sorrento-Sneakers",
        imgdata: "https://img.ssensemedia.com/images/f_auto,q_auto:best/222003F128004_1/dolce-and-gabbana-pink-sorrento-sneakers.jpg",
        Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
        somedata: " 1100 + order placed from here recently",
        price: 100,
        rating: "3.8",
        qnty: 0,
        size: 44
    },
    {
        id: 7,
        name: "Dolce & Gabbana Pink-Daymaster-Sneakers",
        imgdata: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222003F128003_1/dolce-and-gabbana-pink-daymaster-sneakers.jpg",
        Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
        somedata: "500 + order placed from here recently",
        price: 300,
        rating: "3.8",
        qnty: 0,
        size: 44
    },
    {
        id: 8,
        name: "Dolce & Gabbana White and Black-Daymaster-Sneakers",
        imgdata: "https://img.ssensemedia.com/images/f_auto,q_auto:best/221003F128009_1/dolce-and-gabbana-white-and-black-daymaster-sneakers.jpg",
        Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
        somedata: "500 + order placed from here recently",
        price: 100,
        rating: "3.2",
        qnty: 0,
        size: 44
    },
    {
        id: 9,
        name: "Dolce & Gabbana-Black-Portofino-Sneakers",
        imgdata: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221003F128001_1/dolce-and-gabbana-black-portofino-sneakers.jpg",
        Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
        somedata: "2525 + order placed from here recently",
        price: 100,
        rating: "3.8",
        qnty: 0,
        size: 44
    },
];

function Shoes(oldData = CardsData, newData) {

    return [...oldData];

}

//-----------------------------------------------------------------------------------------------

const intialData = {
    carts: [],

};

function cartReducer(oldData = intialData, newData) {
    // console.log(carts);  
    // console.log(newData);
    // console.log(newData.payload);



    switch (newData.type) {
        case "ADD_CART":

            const ItemKaIndex = oldData.carts.findIndex((itm) => itm._id === newData.payload._id);

            if (ItemKaIndex >= 0) {

                oldData.carts[ItemKaIndex].qnty += 1;
                return {
                    ...oldData,
                    carts: [...oldData.carts]
                }
            } else {

                const setQnty = { ...newData.payload, qnty: 1 }
                return {
                    ...oldData,
                    carts: [...oldData.carts, setQnty]
                };
            }

        case "RMV_CART":


            const data = oldData.carts.filter((KoiData) => KoiData._id !== newData.payload._id);
            console.log(data);
            localStorage.setItem("cartReducer", JSON.stringify(oldData));
            return {
                ...oldData,
                carts: data
            }


        case "increment":


            const ItemKaIndex_inc = oldData.carts.findIndex((item) => item._id === newData.payload._id);


            if (oldData.carts[ItemKaIndex_inc].qnty >= 0) {


                const incrementAikItem = oldData.carts[ItemKaIndex_inc].qnty += 1

                localStorage.setItem("cartReducer", JSON.stringify(oldData));
                return {
                    ...oldData,
                    carts: [...oldData.carts]
                }
            }

        case "aik_Item_Ko_Urado":


            const ItemKaIndex_dec = oldData.carts.findIndex((item) => item._id === newData.payload._id);
            //    console.log(ItemKaIndex_dec);
            // index mil gaya

            if (oldData.carts[ItemKaIndex_dec].qnty >= 1) {


                const DecrementAikItem = oldData.carts[ItemKaIndex_dec].qnty -= 1
                // console.log([...oldData.carts, DecrementAikItem]);
                // kam ho raha ahi
                localStorage.setItem("cartReducer", JSON.stringify(oldData));
                return {
                    ...oldData,
                    carts: [...oldData.carts]
                }
            } else if (oldData.carts[ItemKaIndex_dec].qnty === 1) {


                const data = oldData.carts.filter((KoiData) => KoiData.id !== newData.payload);

                localStorage.setItem("cartReducer", JSON.stringify(oldData));

                return {
                    ...oldData,
                    carts: data
                }
            }
        case "Stock":


            const ItemKaIndex_stock = oldData.carts.findIndex((item) => item._id === newData.payload._id);


            if (oldData.carts[ItemKaIndex_stock].stock) {

                const updatedStock = oldData.carts[ItemKaIndex_stock].stock -= oldData.carts[ItemKaIndex_stock].qnty

                localStorage.setItem("cartReducer", JSON.stringify(oldData));
                return {
                    ...oldData,
                    carts: [...oldData.carts]
                }
            }

        case "EMPTY_CART":

            return {
                ...oldData,
                carts: []

            };
        default:
            return oldData;

    }



}
//--------------------------------------------------------------------------------


function userSection(puranaData = {
    users: [],
    cu: {},
}, nyData) {

    if (nyData.type == "USER_ADD_KIA") {
        puranaData.users.push(nyData.payload);
    } else if (nyData.type == "USER_LOGIN_HOGYA") {
        puranaData.cu = nyData.payload;
    } else if (nyData.type == "name_edited") {
        puranaData.cu = nyData.payload;
    } else if (nyData.type == "Email_edited") {
        puranaData.cu = nyData.payload;
    } else if (nyData.type == "Password_reset_hogaya") {
        puranaData.cu = nyData.payload;
    } else if (nyData.type == "LOGOUT_HOGY") {
        puranaData.cu = {};
    } else if (nyData.type == "Account_deleted") {
        puranaData.cu = {};
    }


    return {
        ...puranaData,
        users: [...puranaData.users]
    };

}

//----------------------------------------------------


function orderandpaymentSection(oldData = {
    details: [],
    finalCart: [],


}, newData) {


    switch (newData.type) {
        case "address_and_shipping_details":

            return {
                ...oldData,
                details: [...oldData.details, newData.payload]

            };
        case "final_cart_items":

            return {
                ...oldData,
                finalCart: [...oldData.finalCart, newData.payload]
            };



        default:
            return oldData;
    }


}









let allSections = combineReducers({ cartReducer, Shoes, userSection, orderandpaymentSection });

let meraStore = createStore(allSections,
    // { cartReducer: JSON.parse(localStorage.getItem("cartReducer") || "[]") }

);

export default meraStore;