function str_pad_left(str: string, pad: string, length: number) {
  return (new Array(length + 1).join(pad) + str).slice(-length);
}

export const getDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration - minutes * 60;

  return str_pad_left(minutes.toString(), '0', 2) + ':' + str_pad_left(seconds.toString(), '0', 2);
}