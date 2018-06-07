// //objects-takes multiple data types
// var netFlix = {
//     id:9,
//     name: "super store",
//     season1: {//object
//         seasonInfor: {//another object
//             episodeInfo:[
//                 {episode: 1, episodeName: "pilot"},
//                 { episode: 2, episodeName: "Magazine Profile"},
//                 { episode: 3, episodeName: "Shots and Salsa"},
//                 { episode: 4, episodeName: "Mannequin"},
//                 { episode: 5, episodeName: "Shoplifter"},
//                 { episode: 6, episodeName: "Secret Shopper"},
//                 { episode: 7, episodeName: "Color Wars"},
//                 { episode: 8, episodeName: "Wedding Day Sale"},
//                 { episode: 9, episodeName: "All-Nighter"},
//                 { episode: 10, episodeName: "Demotion"},
//                 { episode: 11, episodeName: "Labor"}
//             ]
//         }
//     },
//     season2: {},
//     season3: {}
// };
// //console.log("all data", netFlix);
// //console.log("season info:", netFlix.season1.seasonInfor);
// console.log("episode name:", netFlix.season1.seasonInfor.episodeInfo[0].episodeName);
// console.log("episode and episode name:", netFlix.season1.seasonInfor.episodeInfo[5].episode, netFlix.season1.seasonInfor.episodeInfo[5].episodeName);
// //let epNum = netflix.season1.seasoninfo.episodeinfo[5].episode;
// ////let epName = netflix.season1.seasoninfo.episodeinfo[5].episodename;
// //console.log(epnum + epname);
// //let s1 = netflix.season1.seasoninfo.episode[2]

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevel: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }

  //using two methods to pull out keys and values
  //built in classes
  //console.log(Object.keys(spaceJam.toonSquad.duck));//object is a class//object.keys gives u the posiiton numbers of the key too
  //console.log(Object.keys(spaceJam.toonSquad).toString());
  console.log(Object.values(spaceJam.toonSquad)
);
  console.log(Object.keys(spaceJam.toonSquad).toString());