import {AddressOptions} from "./locate-address.common";
import * as utils from "utils/utils";

export class LocateAddress {

  public available(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  };

  public locate(options: AddressOptions): Promise<any> {
    return new Promise((resolve, reject) => {

      let addr = "";


      if (options.address) {
        addr = options.address;
      } /*else if (options.lat && options.lng) {
       addr = options.lat + "," + options.lng;
       }*/

      //utils.openUrl("http://maps.apple.com/maps?q=" + encodeURIComponent(addr)
      utils.openUrl("maps:q=" + encodeURIComponent(addr));
      resolve();
    });
  }
}