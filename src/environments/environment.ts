// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  copyrights: "Copyright © 2019, GGI",
  version: "1.0.0",
  TOTAL_TIME: 1500,
  NETWOEK_TIME: 60,
  CURRENCY: "RO",
  MotorLob: "10",
  APP_STAGE: {
    stage01: { name: "Quotation Creation Completed", id: 1 },
    stage02: { name: "Cover Add Completed", id: 2 },
    stage03: { name: "Personal Deatail updated", id: 3 },
    stage04: { name: "Vehicle updated", id: 4 }
  },
  integrationType: "02",
  SECURE_KEY: "@nd20Y05k79@2018M",
  TIME_DIFF:1800000,
// baseURL: "http://10.44.11.96:8855/ComplaintPortal" 
 // baseURL: "http://117.200.72.153:8080/ComplaintPortal" 
  baseURL: "http://59.90.30.92.153:8080/ComplaintPortal"
};