// Spread - A new operator ... that takes an array and separates it
// into its individual values

{
  // Embedding an array's elements into a containing array
  const mid = [3, 4];
  let arr = [1, 2, mid, 5, 6]; // Inserting an array as an element [ 1, 2, [ 3, 4 ], 5, 6 ]
  console.log(arr);
  arr = [1, 2, ...mid, 5, 6]; // Inserting an array's elements [ 1, 2, 3, 4, 5, 6 ]
  console.log(arr);
}
{
  // Make a copy of an array
  const arr1 = ["a", "b", "c"];
  let arr2 = arr1; // Not copying
  arr2.push("d");
  console.log(arr1);
  arr2 = [...arr1]; // Is copying
  arr2.push("e");
  console.log(arr1);
}
{
  // String to array
  const hi = "hello";
  const letters = [...hi];
  console.log(letters);
}
console.log("\n==================================\n");
// OBJECTS
{
  const partOfMe = { first: "Diarmuid", address: "1 Main street" };
  //without destructuring
  let allMe = { surname: "O Connor", first: partOfMe.first, address: partOfMe.address, employer: "WIT" };
  console.log(allMe);
   //with destructuring
  allMe = { surname: "O Connor", ...partOfMe, employer: "SETU" };
  console.log(allMe);
}
{
  // Overwriting an existing object property
  const me = {
    surname: "O Connor",
    first: "Diarmuid",
    address: "1 Main street",
    employer: "WIT",
  };
  const updatedMe = { ...me, address: "2 High Street" };
  console.log(updatedMe);
}