const hre = require("hardhat");
const { assert } = require("chai");

describe("isAscending circuit", () => {
  let circuit;

  const sampleInput = {
    nums: ["5", "6", "7", "8"],
  };
  const sampleInputShouldReturnZero = {
    nums: ["5", "6", "3", "8"],
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
    assert.propertyVal(witness, "main.nums[2]", sampleInput.nums[2]);
    assert.propertyVal(witness, "main.nums[3]", sampleInput.nums[3]);
    
    assert.propertyVal(witness, "main.out", "1");
  });

  it("has the correct output", async () => {
    const expected = { out: 1 };
    const witness = await circuit.calculateWitness(sampleInput, sanityCheck);
    await circuit.assertOut(witness, expected);
  });

  it("has processed not ascending as a false", async () => {
    const expected = { out: 0 };
    const witness = await circuit.calculateWitness(sampleInputShouldReturnZero, sanityCheck);
    await circuit.assertOut(witness, expected);
  });
});
