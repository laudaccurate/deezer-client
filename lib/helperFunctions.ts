function str_pad_left(str: string, pad: string, length: number) {
  return (new Array(length + 1).join(pad) + str).slice(-length);
}

export const getDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration - minutes * 60;

  return str_pad_left(minutes.toString(), '0', 2) + ':' + str_pad_left(seconds.toString(), '0', 2);
}


export const formatNumber = (num: number, precision = 2) => {
  const map = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
    return formatted;
  }

  return num;
}
