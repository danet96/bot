/*
	Battle typechart
*/

exports.getMultipleEff = function (typeA, typesB, gen, notInmmune, inverse) {
	var mux = 1;
	var tmp;
	for (var i = 0; i < typesB.length; i++) {
		tmp = exports.getEffectiveness(typeA, typesB[i], gen);
		if (tmp === 0 && notInmmune) tmp = 1;
		mux *= tmp;
	}
	return mux;
};

exports.getEffectiveness = function (typeA, typeB, gen) {
	if (!gen) gen = 6;
	var chart = exports.gen6;
	if (exports["gen" + gen]) chart = exports["gen" + gen];
	if (!chart[typeB] || !chart[typeB][typeA]) return 1;
	switch (chart[typeB][typeA]) {
		case 1:
			return 2;
		case 2:
			return 0.5;
		case 3:
			return 0;
		default:
			return 1;
	}
};

exports.gen6 = {
	"Bug": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 2,
		"Fire": 1,
		"Flying": 1,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 2,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 1,
		"Steel": 0,
		"Water": 0
	},
	"Dark": {
		"Bug": 1,
		"Dark": 2,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 1,
		"Fighting": 1,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 2,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 3,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Dragon": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 1,
		"Electric": 2,
		"Fairy": 1,
		"Fighting": 0,
		"Fire": 2,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 0,
		"Ice": 1,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 0,
		"Water": 2
	},
	"Electric": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 2,
		"Fairy": 0,
		"Fighting": 0,
		"Fire": 0,
		"Flying": 2,
		"Ghost": 0,
		"Grass": 0,
		"Ground": 1,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 2,
		"Water": 0
	},
	"Fairy": {
		"Bug": 2,
		"Dark": 2,
		"Dragon": 3,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 2,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 1,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 1,
		"Water": 0
	},
	"Fighting": {
		"Bug": 2,
		"Dark": 2,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 1,
		"Fighting": 0,
		"Fire": 0,
		"Flying": 1,
		"Ghost": 0,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 1,
		"Rock": 2,
		"Steel": 0,
		"Water": 0
	},
	"Fire": {
		"Bug": 2,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 2,
		"Fighting": 0,
		"Fire": 2,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 1,
		"Ice": 2,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 1,
		"Steel": 2,
		"Water": 1
	},
	"Flying": {
		"Bug": 2,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 1,
		"Fairy": 0,
		"Fighting": 2,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 3,
		"Ice": 1,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 1,
		"Steel": 0,
		"Water": 0
	},
	"Ghost": {
		"Bug": 2,
		"Dark": 1,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 3,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 1,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 3,
		"Poison": 2,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Grass": {
		"Bug": 1,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 2,
		"Fairy": 0,
		"Fighting": 0,
		"Fire": 1,
		"Flying": 1,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 2,
		"Ice": 1,
		"Normal": 0,
		"Poison": 1,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 0,
		"Water": 2
	},
	"Ground": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 3,
		"Fairy": 0,
		"Fighting": 0,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 1,
		"Ground": 0,
		"Ice": 1,
		"Normal": 0,
		"Poison": 2,
		"Psychic": 0,
		"Rock": 2,
		"Steel": 0,
		"Water": 1
	},
	"Ice": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 1,
		"Fire": 1,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 0,
		"Ground": 0,
		"Ice": 2,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 1,
		"Steel": 1,
		"Water": 0
	},
	"Normal": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 1,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 3,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Poison": {
		"Bug": 2,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 2,
		"Fighting": 2,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 1,
		"Ice": 0,
		"Normal": 0,
		"Poison": 2,
		"Psychic": 1,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Psychic": {
		"Bug": 1,
		"Dark": 1,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 2,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 1,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 2,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Rock": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 1,
		"Fire": 2,
		"Flying": 2,
		"Ghost": 0,
		"Grass": 1,
		"Ground": 1,
		"Ice": 0,
		"Normal": 2,
		"Poison": 2,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 1,
		"Water": 1
	},
	"Steel": {
		"Bug": 2,
		"Dark": 0,
		"Dragon": 2,
		"Electric": 0,
		"Fairy": 2,
		"Fighting": 1,
		"Fire": 1,
		"Flying": 2,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 1,
		"Ice": 2,
		"Normal": 2,
		"Poison": 3,
		"Psychic": 2,
		"Rock": 2,
		"Steel": 2,
		"Water": 0
	},
	"Water": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 1,
		"Fairy": 0,
		"Fighting": 0,
		"Fire": 2,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 1,
		"Ground": 0,
		"Ice": 2,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 2,
		"Water": 2
	}
};

exports.gen5 = exports.gen4 = exports.gen3 = exports.gen2 = {
	"Bug": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 2,
		"Fire": 1,
		"Flying": 1,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 2,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 1,
		"Steel": 0,
		"Water": 0
	},
	"Dark": {
		"Bug": 1,
		"Dark": 2,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 1,
		"Fighting": 1,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 2,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 3,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Dragon": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 1,
		"Electric": 2,
		"Fairy": 1,
		"Fighting": 0,
		"Fire": 2,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 0,
		"Ice": 1,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 0,
		"Water": 2
	},
	"Electric": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 2,
		"Fairy": 0,
		"Fighting": 0,
		"Fire": 0,
		"Flying": 2,
		"Ghost": 0,
		"Grass": 0,
		"Ground": 1,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 2,
		"Water": 0
	},
	"Fairy": {
		"Bug": 2,
		"Dark": 2,
		"Dragon": 3,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 2,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 1,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 1,
		"Water": 0
	},
	"Fighting": {
		"Bug": 2,
		"Dark": 2,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 1,
		"Fighting": 0,
		"Fire": 0,
		"Flying": 1,
		"Ghost": 0,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 1,
		"Rock": 2,
		"Steel": 0,
		"Water": 0
	},
	"Fire": {
		"Bug": 2,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 2,
		"Fighting": 0,
		"Fire": 2,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 1,
		"Ice": 2,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 1,
		"Steel": 2,
		"Water": 1
	},
	"Flying": {
		"Bug": 2,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 1,
		"Fairy": 0,
		"Fighting": 2,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 3,
		"Ice": 1,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 1,
		"Steel": 0,
		"Water": 0
	},
	"Ghost": {
		"Bug": 2,
		"Dark": 1,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 3,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 1,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 3,
		"Poison": 2,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Grass": {
		"Bug": 1,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 2,
		"Fairy": 0,
		"Fighting": 0,
		"Fire": 1,
		"Flying": 1,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 2,
		"Ice": 1,
		"Normal": 0,
		"Poison": 1,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 0,
		"Water": 2
	},
	"Ground": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 3,
		"Fairy": 0,
		"Fighting": 0,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 1,
		"Ground": 0,
		"Ice": 1,
		"Normal": 0,
		"Poison": 2,
		"Psychic": 0,
		"Rock": 2,
		"Steel": 0,
		"Water": 1
	},
	"Ice": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 1,
		"Fire": 1,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 0,
		"Ground": 0,
		"Ice": 2,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 1,
		"Steel": 1,
		"Water": 0
	},
	"Normal": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 1,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 3,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Poison": {
		"Bug": 2,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 2,
		"Fighting": 2,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 1,
		"Ice": 0,
		"Normal": 0,
		"Poison": 2,
		"Psychic": 1,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Psychic": {
		"Bug": 1,
		"Dark": 1,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 2,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 1,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 2,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Rock": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 1,
		"Fire": 2,
		"Flying": 2,
		"Ghost": 0,
		"Grass": 1,
		"Ground": 1,
		"Ice": 0,
		"Normal": 2,
		"Poison": 2,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 1,
		"Water": 1
	},
	"Steel": {
		"Bug": 2,
		"Dark": 2,
		"Dragon": 2,
		"Electric": 0,
		"Fairy": 2,
		"Fighting": 1,
		"Fire": 1,
		"Flying": 2,
		"Ghost": 2,
		"Grass": 2,
		"Ground": 1,
		"Ice": 2,
		"Normal": 2,
		"Poison": 3,
		"Psychic": 2,
		"Rock": 2,
		"Steel": 2,
		"Water": 0
	},
	"Water": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 1,
		"Fairy": 0,
		"Fighting": 0,
		"Fire": 2,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 1,
		"Ground": 0,
		"Ice": 2,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 2,
		"Water": 2
	}
};

exports.gen1 = {
	"Bug": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 2,
		"Fire": 1,
		"Flying": 1,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 2,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 1,
		"Steel": 0,
		"Water": 0
	},
	"Dark": {
		"Bug": 1,
		"Dark": 2,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 1,
		"Fighting": 1,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 2,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 3,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Dragon": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 1,
		"Electric": 2,
		"Fairy": 1,
		"Fighting": 0,
		"Fire": 2,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 0,
		"Ice": 1,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 0,
		"Water": 2
	},
	"Electric": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 2,
		"Fairy": 0,
		"Fighting": 0,
		"Fire": 0,
		"Flying": 2,
		"Ghost": 0,
		"Grass": 0,
		"Ground": 1,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 2,
		"Water": 0
	},
	"Fairy": {
		"Bug": 2,
		"Dark": 2,
		"Dragon": 3,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 2,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 1,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 1,
		"Water": 0
	},
	"Fighting": {
		"Bug": 2,
		"Dark": 2,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 1,
		"Fighting": 0,
		"Fire": 0,
		"Flying": 1,
		"Ghost": 0,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 1,
		"Rock": 2,
		"Steel": 0,
		"Water": 0
	},
	"Fire": {
		"Bug": 2,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 2,
		"Fighting": 0,
		"Fire": 2,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 1,
		"Ice": 2,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 1,
		"Steel": 2,
		"Water": 1
	},
	"Flying": {
		"Bug": 2,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 1,
		"Fairy": 0,
		"Fighting": 2,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 3,
		"Ice": 1,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 1,
		"Steel": 0,
		"Water": 0
	},
	"Ghost": {
		"Bug": 2,
		"Dark": 1,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 3,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 1,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 3,
		"Poison": 2,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Grass": {
		"Bug": 1,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 2,
		"Fairy": 0,
		"Fighting": 0,
		"Fire": 1,
		"Flying": 1,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 2,
		"Ice": 1,
		"Normal": 0,
		"Poison": 1,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 0,
		"Water": 2
	},
	"Ground": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 3,
		"Fairy": 0,
		"Fighting": 0,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 1,
		"Ground": 0,
		"Ice": 1,
		"Normal": 0,
		"Poison": 2,
		"Psychic": 0,
		"Rock": 2,
		"Steel": 0,
		"Water": 1
	},
	"Ice": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 1,
		"Fire": 1,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 0,
		"Ground": 0,
		"Ice": 2,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 1,
		"Steel": 1,
		"Water": 0
	},
	"Normal": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 1,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 3,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Poison": {
		"Bug": 2,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 2,
		"Fighting": 2,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 2,
		"Ground": 1,
		"Ice": 0,
		"Normal": 0,
		"Poison": 2,
		"Psychic": 1,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Psychic": {
		"Bug": 1,
		"Dark": 1,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 2,
		"Fire": 0,
		"Flying": 0,
		"Ghost": 3,
		"Grass": 0,
		"Ground": 0,
		"Ice": 0,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 2,
		"Rock": 0,
		"Steel": 0,
		"Water": 0
	},
	"Rock": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 0,
		"Fairy": 0,
		"Fighting": 1,
		"Fire": 2,
		"Flying": 2,
		"Ghost": 0,
		"Grass": 1,
		"Ground": 1,
		"Ice": 0,
		"Normal": 2,
		"Poison": 2,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 1,
		"Water": 1
	},
	"Steel": {
		"Bug": 2,
		"Dark": 2,
		"Dragon": 2,
		"Electric": 0,
		"Fairy": 2,
		"Fighting": 1,
		"Fire": 1,
		"Flying": 2,
		"Ghost": 2,
		"Grass": 2,
		"Ground": 1,
		"Ice": 2,
		"Normal": 2,
		"Poison": 3,
		"Psychic": 2,
		"Rock": 2,
		"Steel": 2,
		"Water": 0
	},
	"Water": {
		"Bug": 0,
		"Dark": 0,
		"Dragon": 0,
		"Electric": 1,
		"Fairy": 0,
		"Fighting": 0,
		"Fire": 2,
		"Flying": 0,
		"Ghost": 0,
		"Grass": 1,
		"Ground": 0,
		"Ice": 2,
		"Normal": 0,
		"Poison": 0,
		"Psychic": 0,
		"Rock": 0,
		"Steel": 2,
		"Water": 2
	}
};
