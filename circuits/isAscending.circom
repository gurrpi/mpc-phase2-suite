pragma circom 2.1.0;

include "../node_modules/circomlib/circuits/comparators.circom";

// -1 = 21888242871839275222246405745257275088548364400416034343698204186575808495616
template isAscending (n) {
    signal input nums[n];
    signal output out;
    var result = 1;
    
    component lt[n-1];
    
    
    for (var i = 1; i < n; i++) {
        lt[i-1] = LessEqThan(252);

        lt[i-1].in[0] <== nums[i-1];
        lt[i-1].in[1] <== nums[i];
    }
    for (var i = 1; i < n-1; i++) {
        result = lt[i-1].out * lt[i].out;
    }
    out <== result;
}

component main { public [ nums ] } = isAscending(2);
