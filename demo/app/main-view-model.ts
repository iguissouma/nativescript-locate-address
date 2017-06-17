import {Observable} from "data/observable";
import {LocateAddress} from "nativescript-locate-address";

export class HelloWorldModel extends Observable {
  public message: string;
  private locateAddress: LocateAddress;
  private address = "289 avenue georges clemenceau, NANTERRE 92000, France";
  private lat = 48.8858671;
  private lng = 2.2188144;


  constructor() {
    super();
    this.locateAddress = new LocateAddress();
  }

  public doCheckAvailable() {
    this.locateAddress.available().then((avail) => {
      console.log("Avail? " + avail);
      alert(avail);
    }, (err) => {
      alert(err);
    });
  }

  public doAddress() {
    this.locateAddress.locate({
        address: this.address,
    }).then(() => {
      console.log(`Address: ${this.address} locateAddress launched!`);
    }, (err) => {
      alert(err);
    });
  }

  public doLatLng() {
    this.locateAddress.locate({
      lat: this.lat,
      lng: this.lng,
    }).then(() => {
      console.log(`Address: ${this.lat}/${this.lng} locateAddress launched!`);
    }, (err) => {
      alert(err);
    });
  }

}