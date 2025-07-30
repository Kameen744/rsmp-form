<script setup>
import RsmpTForm from "./components/Rsmp-T-Form.vue";
// import lgas from "./lga";
// import PocketBase from "pocketbase";
// const pb = new PocketBase("http://127.0.0.1:8090");
// const pb = new PocketBase("https://pb-api.resourcetrackr.com");
// const collectionName = "lga";

// const fetchStates = async () => {
//   try {
//     for (let index = 0; index < states["features"].length; index++) {
//       const st = states["features"][index];
//       const data = {
//         state: st["properties"]["statename"],
//         geometry: st["geometry"],
//       };
//       await pb.collection(collectionName).create(data);
//       console.log("ins: ", data["state"]);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// const fetchLga = async () => {
//   try {
//     for (let index = 0; index < lgas["features"].length; index++) {
//       const st = lgas["features"][index];
//       const data = {
//         lga: st["properties"]["lganame"],
//         state: st["properties"]["statename"],
//         geometry: st["geometry"],
//       };
//       await pb.collection(collectionName).create(data);
//       // console.log("ins: ", data["lga"]);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
</script>

<template>
  <RsmpTForm></RsmpTForm>
</template>
