//your JS code here. If required.
function secondHighest(arr) {
	if(!Array.isArray(arr)||arr.length<2){
		return -Infinity;
	}
	
	let max=-Infinity;
	let secmax=-Infinity;

	for(let nums of arr){
		if(num>max){
			secmax=max;
			max=num;
		}else if(num<max && num>secmax){
			secmax=num;
		}
	}
	  return secmax === -Infinity ? -Infinity : secmax;
}
	
}