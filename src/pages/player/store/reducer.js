import { Map } from 'immutable';

import * as actionType from './config.js'

const defaultState = Map({
  playList: [
    {
      "name": "GLASSY SKY",
      "id": 30706129,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 55424,
          "name": "Donna Burke",
          "tns": [

          ],
          "alias": [

          ]
        }
      ],
      "alia": [

      ],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 186,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 3104199,
        "name": "TV ANIMATION Tokyo Ghoul Original Soundtrack",
        "picUrl": "https://p1.music.126.net/Gg560eWcSoqhbmKpYnRfZQ==/109951164659464931.jpg",
        "tns": [

        ],
        "pic_str": "109951164659464931",
        "pic": 109951164659464930
      },
      "dt": 294813,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 11794852,
        "vd": 783
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 7076929,
        "vd": 3382
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4717967,
        "vd": 5096
      },
      "a": null,
      "cd": "2",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [

      ],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 270464,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 743010,
      "publishTime": 1427212800000,
      "tns": [
        "琉璃夜空"
      ]
    },
    {
      "name": "Drown (feat. Clinton Kane) (Alle Farben Remix)",
      "id": 1437031748,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 780003,
          "name": "Martin Garrix",
          "tns": [],
          "alias": []
        },
        {
          "id": 32796183,
          "name": "Clinton Kane",
          "tns": [],
          "alias": []
        },
        {
          "id": 206027,
          "name": "Alle Farben",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 87513279,
        "name": "Drown (feat. Clinton Kane) (Alle Farben Remix)",
        "picUrl": "https://p2.music.126.net/2h0zvkI6GPOX6NYnJ3Bvyg==/109951164878897323.jpg",
        "tns": [],
        "pic_str": "109951164878897323",
        "pic": 109951164878897330
      },
      "dt": 169325,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 6773072,
        "vd": -65616
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4063861,
        "vd": -63158
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2709255,
        "vd": -61653
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "mst": 9,
      "cp": 7001,
      "rtype": 0,
      "rurl": null,
      "publishTime": 1586448000000
    }
    ,
    {
      "name": "自卑感",
      "id": 1384554900,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 32208979,
          "name": "Uu",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 80985875,
        "name": "自卑感",
        "picUrl": "https://p2.music.126.net/g2zYJoBLAt_1-BoakOcR1A==/109951164298206250.jpg",
        "tns": [],
        "pic_str": "109951164298206250",
        "pic": 109951164298206260
      },
      "dt": 192666,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7708845,
        "vd": -47623
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4625325,
        "vd": -45049
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3083565,
        "vd": -43449
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": -1,
      "publishTime": 0
    }
  ],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0,
  lyricList: [],
  currentLyricIndex: 0,
  simiSongs: [],
  simiPlayLists: [],
  comments: [],
  hotComments: [],
  commentCount: 0
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    case actionType.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList)
    case actionType.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index)
    case actionType.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence)
    case actionType.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList)
    case actionType.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index)
    case actionType.CHANGE_SIMISONGS:
      return state.set("simiSongs", action.simiSongs)
    case actionType.CHANGE_SIMIPLAY_LIST:
      return state.set("simiPlayLists", action.simiPlayLists)
    case actionType.CHANGE_COMMENTS:
      return state.set("comments", action.comments)
    case actionType.CHANGE_HOT_COMMENTS:
      return state.set("hotComments", action.hotComments)
    case actionType.CHANGE_COMMENT_COUNT:
      return state.set("commentCount", action.commentCount)
    default:
      return state
  }
}

export default reducer;