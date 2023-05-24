const SDK = require("@huddly/sdk").default;
const UsbApi = require("@huddly/device-api-usb").default;
const IpApi = require("@huddly/device-api-ip").default;
const fs = require("fs");
const HuddlyHex = require("@huddly/sdk-interfaces/lib/enums/HuddlyHex").default;

const usb = new UsbApi();
const huddlySdk = new SDK(usb);
let ranUpgrade = false;

const wait = (time) => new Promise((res) => setTimeout(res, time));

huddlySdk.on("ATTACH", async (device) => {
  if (device.productId === HuddlyHex.SMARTBASE_L1_PID) {
    await runTests(device);
  }
});

async function getInfo(device) {
  console.log("====== Getting info ======");
  console.log(await device.getInfo());
}

async function doUpgrade(device) {
  if (ranUpgrade) return;
  console.log("====== Running upgrade ======");
  await device.upgrade({
    file: fs.readFileSync("./upgrade.hpk"),
  });
  ranUpgrade = true;
}

async function getAttribs(device) {
  console.log("====== Getting attributes ======");
  console.log(`serial number: ${device.serialNumber}`);
}
async function getState(device) {
  console.log("====== Getting state ======");
  console.log(await device.getState());
}

async function autozoomController(device) {
  console.log("====== Getting autozoom controller =======");
  const azController = device.getAutozoomControl();
  console.log("====== Checking isEnableds =======");
  console.log(await azController.isEnabled());
  console.log("====== Enabling az =======");
  await azController.enable();
  await wait(2000);
  console.log("====== New state =======");
  console.log(await azController.isEnabled());
  console.log("====== Disabling az =======");
  await azController.disable();
  await wait(2000);
  console.log("====== New state =======");
  console.log(await azController.isEnabled());
}

async function ptzAround(device) {
  console.log("====== Doing PTZ =======");
  await device.setPanTiltZoom({ pan: 20000, tilt: 10000, zoom: 4000 });
  await wait(1000);
  console.log("====== Doing PTZ =======");
  await device.setPanTiltZoom({ pan: 0, tilt: 0, zoom: 1000 });
  await wait(1000);
  console.log("====== Doing PTZ =======");
  await device.setPanTiltZoom({ pan: -10230, tilt: -32131, zoom: 1000 });
  await wait(1000);
}

async function getErrorLog(device) {
  console.log("====== Getting error log =======");
  console.log(await device.getErrorLog().then((l) => l.toString()));
}

async function getState(device) {
  console.log("====== Getting camera state =======");
  console.log(await device.getState());
}

async function runTests(device) {
  await getErrorLog(device);
  await getInfo(device);
  await doUpgrade(device);
  await getState(device);
  await getAttribs(device);
  await autozoomController(device);
  //await device.eraseErrorLog();
}

huddlySdk.init();
