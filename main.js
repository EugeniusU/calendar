function drawTable(data) {
	var table = document.querySelector('table');
	var date = new Date(Date.now()).getMonth();

  var now = 0;
  
	for (var i = 0; i < 30; i++) {
  
		if (now >= weekDays.length - 1) {
			headCell.style.color = 'red';
			cell.style.color = 'red';
		}
    
		if (now == weekDays.length) {
			now = 0;
		}

		if (now == 0) {
			if (i == 0) {
		var headRow = document.createElement("tr");
			}
		var row = document.createElement("tr");
		}
		var headCell = document.createElement("th");
    
		if (i < 7) {
		headCell.textContent = weekDays[now];
		headRow.appendChild(headCell);
		table.appendChild(headRow);
		}

		var cell = document.createElement("td");
		cell.textContent = i + 1;
		row.appendChild(cell);
		table.appendChild(row);
		now += 1;
	}
			
}

var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 
			   'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь',
			   'Ноябрь', 'Декабрь'];
			   
var weekDays = ['Понедельник', 'Вторник', 'Среда',
				'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];


drawTable();
