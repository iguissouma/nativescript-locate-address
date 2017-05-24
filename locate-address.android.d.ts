import { AddressOptions } from "./locate-address.common";
export declare class LocateAddress {
    private isPackageInstalled();
    available(): Promise<any>;
    locate(options: AddressOptions): Promise<any>;
}
