/* Задача 1 */

var arr = [2, 3, 4, 5, 6, 7];

  result = arr.reduce(function(sum, elem) {
	if (elem >= 0) {
		return sum + elem;
	} else {
		return sum;
	}
});

console.log(result);

/*  Задача 2 */

var sumNumb = 0;

function returnNum(begin, end, step) {
  if (begin < 0 || end < 0 || step <= 0) {
    return 0
  }
  sumNumb += begin;
  if ((begin + step) <= end) {
    begin = (begin + step) + returnNum(begin + step, end, step)
  }
}

returnNum(0, 15, 5)

console.log(sumNumb)