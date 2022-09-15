# Framing Modes

Going forward there will be more ways for the cameras to utilize the onboard compute to provide smart ways of framing people in the meeting.

In an efford to streamline everything we are introducing a concept of toggling between the different states the framer can be in. These are called FramingModes and include: `OFF`, `NORMAL`, `SPEAKER_FRAMING` and `GALLERY_VIEW`

### Support Table

Not all of theese modes are available for every camera. We are hoping that the camera can provide that information in the future, but for older camera versions and for now we recommend consulting the support table beneath. Note that if a camera needs a option certificate it is no guarantee that a camera has support with a given version. To be sure you will therefore have to check if a camera has a certificate for a given feature. More about that below the table.

| Feature         | IQ      | L1      | S1   | Needs option certificate |
| --------------- | ------- | ------- | ---- | ------------------------ |
| NORMAL          | ALL     | ALL     | ALL  | NO                       |
| GALLERY_VIEW    | > 1.6.0 | NONE    | NONE | NO                       |
| SPEAKER_FRAMING | NONE    | > 1.5.0 | NONE | YES                      |

### Option Certificates

Option certificates are meant to validate wheter or not a camera has a certain feature (option) available. The certificate is applied to the camera from an online source, but is validated by the camera itself.

Currently this is only relevant for the L1 with the `SPEAKER_FRAMING` feature. There will be a time frame with the `1.5.0` firmware as latest where it won't be possible to check for option certificates. With subsequent releases there will be an option to check for this.
