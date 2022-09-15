const huddlySdk = require("@huddly/sdk").default;
const deviceApiUsb = require("@huddly/device-api-usb").default;
const azModes =
  require("@huddly/sdk-interfaces/lib/enums/AutozoomModes").default;

const usbApi = new deviceApiUsb();
const sdk = new huddlySdk(usbApi);

async function onAttach(cameraManager) {
  const autozoomController = await cameraManager.getAutozoomControl();

  // Init the autozoom controller
  await autozoomController.init();

  // Make sure that autozoom is enabled
  await autozoomController.enable();

  // Create an options object containing the desired mode
  // PLAZA === Gallery view
  const options = {
    mode: azModes.PLAZA,
  };

  // Use the updateOpts function and pass it the options object
  await autozoomController.updateOpts(options);
}

sdk.on("ATTACH", onAttach);
sdk.init();
