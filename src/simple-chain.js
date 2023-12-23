const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return chainMaker;
  },

  removeLink(position) {
    try {
      if (position <= 0 || position > this.getLength() || isNaN(position)) {
        this.chain = [];
        throw new Error("You can't remove incorrect link!");
      }

      this.chain.splice(position - 1, 1);

    } catch (e) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    return chainMaker;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return chainMaker;
  },

  finishChain() {
    const current = this.chain.join('~~');
    this.chain = [];
    return current;
  },
};

module.exports = {
  chainMaker,
};
