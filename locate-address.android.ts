import { AddressOptions } from "./locate-address.common";
import * as application from "tns-core-modules/application";

// ignore TS error
let com:any;

export class LocateAddress {

    private isPackageInstalled():boolean {
        try {
            let intent = new android.content.Intent(
                android.content.Intent.ACTION_VIEW,
                android.net.Uri.parse("http://maps.google.com/maps"));

            let pm = com.tns.NativeScriptApplication.getInstance().getPackageManager();
            return intent.resolveActivity(pm) != null;
        } catch (e) {
        }
        return true;
    }

    public available():Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(this.isPackageInstalled());
        });
    };

    public locate(options:AddressOptions):Promise<any> {
        return new Promise((resolve, reject) => {

            if (!this.isPackageInstalled()) {
                reject("Maps app not installed, use 'available' before using 'navigate'.");
                return;
            }

            let addr = "";


            if (options.address) {
                addr = options.address;
            } else if (options.lat && options.lng) {
                addr = options.lat + "," + options.lng;
            }

            let url = "geo:0,0?q=" + (options.address? encodeURIComponent(addr) : addr);

            let intent = new android.content.Intent(
                android.content.Intent.ACTION_VIEW,
                android.net.Uri.parse(url));

            (application.android.foregroundActivity || application.android.startActivity).startActivityForResult(intent, 0);

            resolve();
        });
    }
}
