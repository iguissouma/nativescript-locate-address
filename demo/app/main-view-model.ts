import {Observable} from "data/observable";
import {LocateAddress} from "nativescript-locate-address";

export class HelloWorldModel extends Observable {
  public message: string;
  private locateAddress: LocateAddress;
  private address = "289 avenue georges clemenceau, NANTERRE 92000, France";


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

}