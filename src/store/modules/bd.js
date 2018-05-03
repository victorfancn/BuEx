export default {
  state: {
    curs: [], //所有货币类型
    pairs: [], //交易对
    pair: { bc: '', qc: '' } //当前交易对
  },
  mutations: {
    initCurs(s, list) {
      s.curs = list
    },
    initPairs(s, list) {
      s.pairs = list
      s.pair = { bc: list[0].baseCurrency, qc: list[0].quoteCurrency }
    },
    setPair(s, p) {
      s.pair = p
    }
  }
}