import bacteria from '../images/bakti-1.png';
import bacteriaSpike from '../images/bakti-2.png';
import bacteriaLarge from '../images/bakti-3.png';
import sperm from '../images/pink-sperm-1.png';
import arrowRight from '../images/icons/arrow-right-icon.svg';

import sperm1 from '../images/pink-sperm-up-1.png';
import sperm2 from '../images/pink-sperm-up-2.png';
import sperm3 from '../images/pink-sperm-up-3.png';
import sperm4 from '../images/pink-sperm-up-4.png';
import sperm5 from '../images/pink-sperm-up-5.png';

import bubble1 from '../images/bubble-1.png';
import bubble2 from '../images/bubble-2.png';
import bubble3 from '../images/bubble-3.png';
import bubble4 from '../images/bubble-4.png';
import bubble5 from '../images/bubble-5.png';
import bubble6 from '../images/bubble-6.png';
import bubble7 from '../images/bubble-7.png';
import bubble8 from '../images/bubble-8.png';

import calendarIcon from '../images/icons/calendar-icon.png';
import plateIcon from '../images/icons/plate-icon.png';
import bottleImg from '../images//bottle.png';
import plusIcon from '../images/icons/plus-icon.svg';
import closeIcon from '../images/icons/close-icon.svg'

const textSlideImages = [
	{ id: 1, img: sperm1 },
	{ id: 2, img: sperm2 },
	{ id: 3, img: sperm3 },
	{ id: 4, img: sperm4 },
	{ id: 5, img: sperm5 },
];

const titleSlideImages = {
	bacteria,
	bacteriaSpike,
	bacteriaLarge,
	sperm,
  arrowRight
};

const keySlideImages = {
  calendarIcon,
  plateIcon,
  bottleImg,
  plusIcon,
  closeIcon
};

const keySlideBubbles = [
	{ id: 1, img: bubble1 },
	{ id: 2, img: bubble2 },
	{ id: 3, img: bubble3 },
	{ id: 4, img: bubble4 },
	{ id: 5, img: bubble5 },
	{ id: 6, img: bubble6 },
	{ id: 7, img: bubble7 },
	{ id: 8, img: bubble8 },
];

const ITEMS_TO_DISPLAY = 3;

const featuresArray = [
  { id: 1, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
  { id: 2, text: 'Faucibus pulvinar elementum integer enim' },
  { id: 3, text: 'Faucibus pulvinar elementum integer enim' },
  { id: 4, text: 'Mi bibendum neque egestas congue quiquie egestas diam' },
  { id: 5, text: 'Venenatis lectus magma fringilla urna' },
  { id: 6, text: 'Venenatis lectus magma fringilla urna' },
];


export { titleSlideImages, textSlideImages, keySlideImages,keySlideBubbles, ITEMS_TO_DISPLAY,featuresArray };
