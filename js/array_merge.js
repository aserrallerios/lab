function object_merge(o1, o2)
{
  var res = {}; 

  for ( var p in o1 )
  {
    res[p] = o1[p];
  }

  for ( var p in o2 )
  {
    res[p] = o2[p];
  }

  return res;
}

function object_merge_recursive(o1, o2)
{
  var res = {};

  if ( typeof o1 !== "object" ||
      typeof o2 !== "object")
  {
    return [o1, o2];
  }

  for ( var p in o1 )
  {
    res[p] = o1[p];
  }

  for ( var p in o2 )
  {
    if ( res[p]  )
    {
      res[p] = object_merge_recursive(res[p], o2[p]);
    } else
    {
      res[p] = o2[p];
    }
  }

  return res;
}

a0 = [];
a1 = ["red", "green"];
a2 = ["red", "blue"]; // repeated element "red"

m0 = {};
m1 = {
    1000: {
        "a11": 111,
        "a12": 112
    },
    1001: {
        "b11": 121,
        "b12": 122
    },
    "asdf": {
        "asdf11": 131,
        "asdf12": 132
    }
};
m2 = {
    1001: { // repeated key
        "b11": 121, // repeated key, repeated value
        "b12": 222 // repeated key, different value
    },
    "asdf": { // repeated key
        "asdf11": 131, // repeated key, repeated value
        "asdf12": 232 // repeated key, different value
    },
    1002: {
        "c11": 241,
        "c12": 242
    },
};



console.log("-");
console.log("a1.concat(a2)");
merge = a1.concat(a2);
console.log(merge);

console.log("-");
console.log("a0.concat(a1)");
merge = a0.concat(a1);
console.log(merge);

console.log("-");
console.log("object_merge(m1, m2)");
merge = object_merge(m1, m2);
console.log(merge);
console.log("numeric keys are preserved.");
console.log("existing keys are overwritten.");

console.log("-");
console.log("object_merge_recursive(m1, m2)");
merge = object_merge_recursive(m1, m2);
console.log(merge);
console.log("numeric keys are preserved.");
console.log("existing keys are merged.");
