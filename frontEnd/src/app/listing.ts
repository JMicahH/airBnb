export class Listing {
    title: string;
    desc: string;
    address: string;
    apartmentNumber: string;
    city: string;
    state: string;
    zip: string;
    image: string;

    price: number;
    maxGuests: number;
    type: string;
    beds: number;
    baths: number;
    amenities = {
        wifi: false,
        kitchen: false,
        tv: false,
        ac: false,
        heat: false,
        pets: false,
        pool: false,
        hotTub: false,
        wheelchair: false,
        kidFriendly: false,
        washerDryer: false,
        parking: false,
        smoking: false,
        fireplace : false,
    };
}
