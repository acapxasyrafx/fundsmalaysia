//
import readXlsxFile from 'read-excel-file'

export function readExcelFile (file, sheet) {
  //* * read file excel */
  return readXlsxFile(file, { sheet: sheet }).then(rows => {
    console.log(JSON.stringify(rows))
    //* * convert array to json object */
    var keys = rows[0]
    // vacate keys from main array
    var newArr = rows.slice(1, rows.length)

    var formatted = []
    var data = newArr
    var cols = keys
    var l = cols.length
    for (var i = 0; i < data.length; i++) {
      var d = data[i]
      var o = {}
      for (var j = 0; j < l; j++) o[cols[j]] = d[j]
      formatted.push(o)
    }
    console.log(JSON.stringify(formatted))
    return formatted
  })
}
