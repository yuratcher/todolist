export default {
  getList: state => state.item,

  getWinner: (state) => {
    let first = state.item[0] ? state.item[0] : {};
    first = Object.assign(first, { prizeCount: 0 });
    let second =  state.item[1] ? state.item[1] : {};
    second = Object.assign(second, { prizeCount: 0 });
    if (state.item && state.item.length > 1 && first.id != second.id) {
      if (first.id < second.id && first.id != second.id) {
        first.prizeCount = first.prizeCount + 1;
      } else if (first.id != second.id) {
        second.prizeCount = second.prizeCount + 1;
      };
      if (first.public_repos > second.public_repos && first.public_repos != second.public_repos) {
        first.prizeCount = first.prizeCount + 1;
      } else if (first.public_repos != second.public_repos) {
        second.prizeCount = second.prizeCount + 1;
      };
      if (first.followers > second.followers && first.followers != second.followers) {
        first.prizeCount = first.prizeCount + 1;
      } else if (first.followers != second.followers) {
        second.prizeCount = second.prizeCount + 1;
      };
      if (first.prizeCount >  second.prizeCount && first.prizeCount != second.prizeCount) {
        return `WINNER ${first.login}`;
      } else if (first.prizeCount != second.prizeCount) {
        return `WINNER ${second.login}`;
      }
      return 'you are friend'
    } else if (first.id == second.id) {
      return '';
    };
    return 'No one'
  }
}
