{
  let a = 0;
  const b = 1;
  const c = 5;

  let actual;

  // (a += String(a += b)) % c;
  {
    a += b;
    let step_1 = String(a);
    let step_2 = a += step_1; 
    actual = step_2 % c;
  };
};