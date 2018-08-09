// Number(String(input).replace("12", ""));

function trace() {
	console.log("-----------------");

	// read, clean & process user input
	var a_type = document.getElementById("a-type").value;
	var a_value = document.getElementById("a-value").value;
	var a = cast(a_type, a_value);
	
	var b_type = document.getElementById("b-type").value;
	var b_value = document.getElementById("b-value").value;
	var b = cast(b_type, b_value);

	var c_type = document.getElementById("c-type").value;
	var c_value = document.getElementById("c-value").value;
	var c = cast(c_type, c_value);

	var s0 = {
		a: {[a_type]: a},
		b: {[b_type]: b},
		c: {[c_type]: c}
	};

	var ex_a_type = document.getElementById("ex-a-type").value;
	var ex_a_value = document.getElementById("ex-a-value").value;
	var ex_a = cast(ex_a_type, ex_a_value);

	var ex_res_type = document.getElementById("ex-res-type").value;
	var ex_res_value = document.getElementById("ex-res-value").value;
	var ex_res = cast(ex_res_type, ex_res_value);


	// do the logic
	var s1 = a += b;
	var s2 = String(a);
	var s3 = a += s2;
	var s4 = a % c;

	var s5 = a += b;
	var s6 = String(a);
	var s7 = a += s6;
	var s8 = a % c;

	var sf = (s4, s8);






	// display to user
	var s0_display = document.getElementById("s0");
	s0_display.innerHTML = "(inspect page)";
	console.log(s0);

	var s1_t = document.getElementById("s1-t");
	s1_t.value = typeof s1;
	var s1_v = document.getElementById("s1-v");
	s1_v.value = s1;

	var s2_t = document.getElementById("s2-t");
	s2_t.value = typeof s2;
	var s2_v = document.getElementById("s2-v");
	s2_v.value = s2;

	var s3_t = document.getElementById("s3-t");
	s3_t.value = typeof s3;
	var s3_v = document.getElementById("s3-v");
	s3_v.value = s3;

	var s4_t = document.getElementById("s4-t");
	s4_t.value = typeof s4;
	var s4_v = document.getElementById("s4-v");
	s4_v.value = s4;

	var s5_t = document.getElementById("s5-t");
	s5_t.value = typeof s5;
	var s5_v = document.getElementById("s5-v");
	s5_v.value = s5;

	var s6_t = document.getElementById("s6-t");
	s6_t.value = typeof s6;
	var s6_v = document.getElementById("s6-v");
	s6_v.value = s6;

	var s7_t = document.getElementById("s7-t");
	s7_t.value = typeof s7;
	var s7_v = document.getElementById("s7-v");
	s7_v.value = s7;

	var s8_t = document.getElementById("s8-t");
	s8_t.value = typeof s8;
	var s8_v = document.getElementById("s8-v");
	s8_v.value = s8;

	var sf_t = document.getElementById("sf-t");
	sf_t.value = typeof sf;
	var sf_v = document.getElementById("sf-v");
	sf_v.value = sf;

	console.assert(a === ex_a, ["a", {actual: a}, {expected: ex_a}] );
	console.assert(sf === ex_res, ["result", {actual: sf}, {expected: ex_res}] );
};