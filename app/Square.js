export default class Square {
	constructor({ rank, file, isWhite }) {
		this.rank = rank;
		this.file = file;
		this.element = document.createElement('div');
		// this.element.textContent = `${this.file}${this.rank}`;
		this.element.setAttribute('id', `${this.file}${this.rank}`);
		if (isWhite) {
			this.element.classList.add('square', 'white');
		} else {
			this.element.classList.add('square', 'black');
		}
		this.onClick();
	}
	onClick() {
		this.element.addEventListener('click', () => {
			console.log(this.element.textContent);
		});
	}
}
