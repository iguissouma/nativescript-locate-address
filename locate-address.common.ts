export interface AddressOptions {
    /**
     * Use as 3,34523 with 'lng', ignored if 'address' is set as well.
     */
    lat?: number;
    /**
     * Use as 4,21323 with 'lat', ignored if 'address' is set as well.
     */
    lng?: number;
    /**
     * Concat the address as one string with commas's.
     * 'lat' and 'lng' are ignored if this is set as well.
     */
    address?: string;
}