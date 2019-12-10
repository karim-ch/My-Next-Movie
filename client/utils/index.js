module.exports = {
  average_on_five(vote_average) {
    const n = parseInt(vote_average);
    const vote_5 = (n / 10) * 5;
    return Math.round(vote_5 * 2) / 2;
  }
};
