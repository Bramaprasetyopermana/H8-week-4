function countCalorie(arrayMenus) {
	let total = 0
	arrayMenus.forEach(menu => {
		total += menu.calories
	})
	return total
}

module.exports = {counter:countCalories}