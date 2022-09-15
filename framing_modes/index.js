const huddlySdk = require("@huddly/sdk").default;
const DeviceApiUsb = require("@huddly/device-api-usb").default;
const DeviceApiIp = require("@huddly/device-api-ip").default;
const FramingModes =
  require("@huddly/sdk-interfaces/lib/enums/FramingModes").default;
const HuddlyHex = require("@huddly/sdk-interfaces/lib/enums/HuddlyHex").default;
const Semver = require("semver");

const usbApi = new DeviceApiUsb();
const ipApi = new DeviceApiIp();
const sdk = new huddlySdk([usbApi, ipApi], [usbApi, ipApi]);

async function onAttach(cameraManager) {
  const cameraInfo = await cameraManager.getInfo();
  const autozoomController = await cameraManager.getAutozoomControl();

  // Init the autozoom controller
  await autozoomController.init();

  // Simply use the setFraming method from the autozoom controller
  // with a given framing mode

  // NORMAL is the regular autozoom framer
  // await autozoomController.setFraming(FramingModes.NORMAL);

  // Use OFF to go back to manual PTZ
  // await autozoomController.setFraming(FramingModes.OFF);

  // Use GALLERY_VIEW for ... gallery view if supported
  if (supportsGalleryView(cameraInfo)) {
    await autozoomController.setFraming(FramingModes.GALLERY_VIEW);
  }

  if (supportsSpeakerFraming(cameraInfo)) {
    // Check if speaker_framing option certificate is on camera
    const optCerts = cameraManager.getOptionCertificates();
    const hasOptCert = optCerts.some((opt) => opt.name === "speaker_framing");
    if (hasOptCert) {
      await autozoomController.setFraming(FramingModes.SPEAKER_FRAMING);
    }
  }
}

sdk.on("ATTACH", onAttach);
sdk.init();

const supportsGalleryView = (cameraInfo) =>
  cameraInfo.productId === HuddlyHex.BOXFISH_PID &&
  Semver.gte(cameraInfo.version, "1.6.0");

const supportsSpeakerFraming = (cameraInfo) =>
  cameraInfo.productId === HuddlyHex.L1_PID &&
  Semver.gte(cameraInfo.version, "1.5.0");
