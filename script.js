/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(printingThroghMap); // 

  function printingThroghMap(arrayItem) {
    if (arrayItem.Marks > 50) {
      console.log(arrayItem);
    }
  }
}



function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(printingThroghForEach); // 

  function printingThroghForEach(arrayItem) {
    if (arrayItem.Marks > 50) {
      console.log(arrayItem);
    }
  }
}


function addData() {
  //Write your code here, just console.log
  let newObj = { id: 4, name: "susan", age: "20", marks: 88 };
  arr.push(newObj);
  console.log(arr);
}



function removeFailedStudent() {
  //Write your code here, just console.log
  let filtered_arr = arr.filter(function (val) {
    //callback function
    if (val.marks < 50) {
      //filtering criteria
      return val;
    }
  });
  console.log(filtered_arr);
}




function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "Atharv", age: "30", marks:70 },
    { id: 6, name: "akshayG", age: "28", marks:60  },
    { id: 7, name: "vidhiJ", age: "21", marks:76  },
  ];

  let concatArray = arr.concat(arr2);
  console.log(concatArray);
}

