let fat = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fat(n - 1);
  }
};
