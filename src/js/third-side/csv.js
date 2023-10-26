export default class CSV {
  static decode(dataRaw) {
    let aData = dataRaw.split("\n");

    let aDataHead = aData[0].replace(
      new RegExp(`${CSV.SYM_SPLIT}$`, "m"),
      ""
    ).split(CSV.SYM_SPLIT);

    let mDataTail = aData;
    mDataTail.shift();
    let aResult = [];

    for (let row of mDataTail) {
      let aColumns = row.split(CSV.SYM_SPLIT);
      let dRow = CSV.rowSplit(aDataHead, aColumns);
      aResult.push(dRow)
    };

    return aResult
  };

  static rowSplit(heads, columns) {
    let dResultRow = {};

    for (let i = 0; i < heads.length; i++) {
      let head;

      if (columns[i] === undefined) {
        break
      } else {
        head = heads[i];
        dResultRow[head] = columns[i].replaceAll("\"", "");
        continue
      }
    };

    return dResultRow
  }
};

CSV.SYM_SPLIT = ";"