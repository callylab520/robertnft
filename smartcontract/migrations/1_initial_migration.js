const RobertNFT = artifacts.require("RobertNFT");

module.exports = function (deployer) {
  deployer.deploy(RobertNFT, "Robert", "ROV");
};
