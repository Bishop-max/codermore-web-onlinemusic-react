/**
 * [00:00.000] 作词 : 李遇/京阿九\n
 * [00:01.000] 作曲 : 李遇\n
 * [00:10.97]编曲：sugar\n
 * [00:24.99]低头瞥见自己的影子在前\n
 * [00:29.69]疯狂的跑着躲的离你不远\n
 * [00:35.42]沉默走的路不知几个光年\n
 * [00:41.12]我还原地打转连微笑也腼腆\n
 * [00:46.86]一事无成是最好描述\n
 * [00:50.18]要怎么往前再走一步\n
 * [00:52.95]在无人的舞台跳舞\n
 * [00:56.31]灯不灯光不是束缚\n
 * [01:00.03]我将空空的眼神都深深的藏在我长长的刘海背面\n
 * [01:07.19]确定你离开我才能表现出留恋\n
 * [01:11.95]你像翩翩的情书被我偷偷的加进沉沉的思念\n
 * [01:17.90]会让人沉湎 惹人怜\n
 */

 const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

 export function parseLyric(lyricString){
   const lyricStrings = lyricString.split("\n");

   const lyrics = []
   for(let line of lyricStrings){
     const result = parseExp.exec(line);
     if(!result) continue;
    //  console.log(result);
     const time1 = result[1]*60*1000;
     const time2 = result[2]*1000;
     const time3 = result[3].length === 3? result[3]*1 : result[3]*10;
     const time = time1 + time2 + time3
     const content = line.replace(parseExp,"").trim();
     const lineObj = {time,content}
     lyrics.push(lineObj)
   }

   return lyrics
 }