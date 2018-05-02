function checkNull(param) {
  // console.log(param);
  if (param.song == null) {
    return 'unassigned'
  }
  else {
    return param.song.title
  }
}


module.exports = {
  cekKosong: checkNull
}
