// utils/cctv-data-helpers.js
import {
  IP_CAMERA_DATA,
  DOME_CAMERA_DATA,
  BULLET_CAMERA_DATA,
  PTZ_CAMERA_DATA,
  WIRELESS_CAMERA_DATA,
  NVR_SYSTEM_DATA,
} from "@/data/cctv-page-data";

const ALL_CAMERA_DATA = [
  IP_CAMERA_DATA,
  DOME_CAMERA_DATA,
  BULLET_CAMERA_DATA,
  PTZ_CAMERA_DATA,
  WIRELESS_CAMERA_DATA,
  NVR_SYSTEM_DATA,
];

export const getCameraDataBySlug = (slug) => {
  return ALL_CAMERA_DATA.find((cameraData) => cameraData.slug === slug);
};
