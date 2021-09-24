const MastefChef = artifacts.require('MasterChef');

module.exports = async function(deployer) {

  await deployer.deploy(MastefChef,
    "0xC17FA8E2310f1920Ce592b267Bb16d5f00336155",
    "0x5dE4C680d3e306eBbd94b5795905f8234B22D803",
    "0x5dE4C680d3e306eBbd94b5795905f8234B22D803",
    "30000000000000000000",
    "5506200",
    '900000',
    '90000',
    '10000'
  );

  const instanceMasterChef = await MastefChef.deployed();
};

