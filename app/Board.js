import Square from './Square.js';
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
export default class Board {
	constructor(selector) {
		this.element = document.querySelector(selector);
		this.element.classList.add('board');
		this.init();
	}
	init() {
		// set the size of the board.
		this.element.style.width = '90vmin';
		this.element.style.height = '90vmin';
		// Generate an array of squares.
		this.squares = Array.from({ length: 64 }, (_, index) => {
			let rank = 8 - Math.floor(index / 8);
			let fileIndex = index % 8;
			let file = letters[fileIndex];
			const isWhite = rank % 2 === fileIndex % 2;
			let square = new Square({
				rank,
				file,
				isWhite,
			});
			this.element.appendChild(square.element);
			return square;
		});
	}
}
