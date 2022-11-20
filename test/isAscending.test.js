const hre = require("hardhat");
const { assert } = require("chai");

describe("isAscending circuit", () => {
  let circuit;

  // TODO: bit representation
  const sampleInput = {
    nums: ["9007199254740991", "9007199254740992"],
  };

  const t1 = {
    nums: ["9007199254740992", "9007199254740993"],
  };
  const t2 = {
    nums: ["0", "7237005577332262213973186563042994240829374041602535252466099000494570602496"],
  };
  const t3 = {
    nums: ["10944121435919637611123202872628637544274182200208017171849102093287904247807", "10944121435919637611123202872628637544274182200208017171849102093287904247808"],
  };
  const t4 = {
    nums: ["0", "10944121435919637611123202872628637544274182200208017171849102093287904247808"],
  };
  const t5 = {
    nums: ["21888242871839275222246405745257275088548364400416034343698204186575808495615", "21888242871839275222246405745257275088548364400416034343698204186575808495617"],
  };
  const t6 = {
    nums: ["0", "21888242871839275222246405745257275088548364400416034343698204186575808495618"],
  };
  const t7 = {
    nums: ["10944121435919637611123202872628637544274182200208017171849102093287904247808", "21888242871839275222246405745257275088548364400416034343698204186575808495618"],
  };

  const sanityCheck = true;

  before(async () => {
    circuit = await hre.circuitTest.setup("isAscending");
  });

  it("produces a witness with valid constraints", async () => {
    const witness = await circuit.calculateWitness(sampleInput, sanityCheck);
    
    await circuit.checkConstraints(witness);
  });

  it("has expected witness values", async () => {
    const witness = await circuit.calculateLabeledWitness(
      sampleInput,
      sanityCheck
    );
    assert.propertyVal(witness, "main.nums[0]", sampleInput.nums[0]);
    assert.propertyVal(witness, "main.nums[1]", sampleInput.nums[1]);
    
    assert.propertyVal(witness, "main.out", "1");
  });

  it("has the correct output", async () => {
    const expected = { out: 1 };
    const witness = await circuit.calculateWitness(sampleInput, sanityCheck);
    await circuit.assertOut(witness, expected);
  });

  it("t1", async () => {
    const expected = { out: 1 };
    const witness = await circuit.calculateWitness(t1, sanityCheck);
    await circuit.assertOut(witness, expected);
  });

  it("t2", async () => {
    const expected = { out: 1 };
    const witness = await circuit.calculateWitness(t2, sanityCheck);
    await circuit.assertOut(witness, expected);
  });

  it("t3", async () => {
    const expected = { out: 1 };
    const witness = await circuit.calculateWitness(t3, sanityCheck);
    await circuit.assertOut(witness, expected);
  });

  it("t4", async () => {
    const expected = { out: 1 };
    const witness = await circuit.calculateWitness(t4, sanityCheck);
    await circuit.assertOut(witness, expected);
  });

  it("t5", async () => {
    const expected = { out: 1 };
    const witness = await circuit.calculateWitness(t5, sanityCheck);
    await circuit.assertOut(witness, expected);
  });

  it("t6", async () => {
    const expected = { out: 1 };
    const witness = await circuit.calculateWitness(t6, sanityCheck);
    await circuit.assertOut(witness, expected);
  });

  it("t7", async () => {
    const expected = { out: 1 };
    const witness = await circuit.calculateWitness(t7, sanityCheck);
    await circuit.assertOut(witness, expected);
  });

});
