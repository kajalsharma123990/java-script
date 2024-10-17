///   for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best")
    }
    // console.log(element)
    
}


// ============  using for loop create table ==============
for (let i = 0; i <= 10; i++) {
  
    for (let j = 0; j <=10; j++) {
    //    console.log(i + '*' + j + "=" + i*j)
        
    }
}

// === for loop used in array ==========

const myarr= ["man", "woman", "boys"]

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element)
    
}


// ================== Break and continue = ============

for (let i = 1; i <= 10; i++) {
    if(i == 5){
        // console.log('detected');
break;
    }
    
}

// no work after break 

for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log('detected');
        continue;

    }
    
}